import {
  useChangeEmail,
  useGetUserById,
  useUpdateUser,
} from "@/hooks/useUsers";
import {
  Button,
  EmailWrapper,
  FlexWrapper,
  ImageWrapper,
  InfoWrapper,
  LabelInputWrapper,
  ProfileWrapper,
} from "./profile.style";
import { useEffect, useRef, useState } from "react";
import LoadingComponent from "@/components/LoadingComponent/loading";
import { FiCamera, FiEdit, FiSave, FiUploadCloud } from "react-icons/fi";
import { MdCancel, MdCheck, MdDone, MdSave } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import { toast } from "react-toastify";
import { useUploadImage } from "@/hooks/useImages";
import { getImageUrl } from "@/utils";
import { BiCheckCircle } from "react-icons/bi";

const ProfilePage = () => {
  const [userId, setUserId] = useState<number>();
  const [name, setName] = useState<string>();
  const [surname, setSurname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone_number, setPhoneNumber] = useState<string>();
  const [image_url, setImageUrl] = useState<string | undefined>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [emailDisabled, setEmailDisabled] = useState<boolean>(true);
  const [originalUser, setOriginalUser] = useState<any>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const { mutate: uploadImage } = useUploadImage();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [image_id, setImageId] = useState<number | null>(null);
  const [newEmail, setNewEmail] = useState<string>("");
  const [code, setCode] = useState<number>();
  const [users_code, setUsersCode] = useState<string>("");
  const [codeInput, setCodeInput] = useState<boolean>(false);

  useEffect(() => {
    const user_id = Number(localStorage.getItem("user_id"));
    setUserId(user_id);
  }, []);

  const { data: user, isLoading, refetch } = useGetUserById(Number(userId));
  const { mutate: update, isPending } = useUpdateUser();
  const { mutate: changeEmail, isPending: isPendingChangeEmail } =
    useChangeEmail();

  useEffect(() => {
    if (user) {
      setOriginalUser(user);
      setName(user.name);
      setSurname(user.surname);
      setEmail(user.email);
      setPhoneNumber(user.phone_number);
      setImageUrl(user.image?.url);
    }
  }, [user]);

  const handleCancel = () => {
    setDisabled(true);
    setName(originalUser?.name);
    setSurname(originalUser?.surname);
    setPhoneNumber(originalUser?.phone_number);
    setImageUrl(originalUser?.image?.url);
    setPreview(null);
    setImageId(null);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpdate = () => {
    const sendUpdate = (imageId?: number) => {
      const data: any = {
        name,
        surname,
        phone_number,
      };

      if (imageId) {
        data.image = imageId;
      }

      update(
        { id: Number(userId), data },
        {
          onSuccess: () => {
            toast.success("Malumotlar saqlandi");
            setDisabled(true);
            setPreview(null);
            setImage(null);
            refetch();
          },
          onError: (e: any) => {
            toast.error(e.response?.data?.message);
          },
        },
      );
    };

    if (image) {
      uploadImage(
        { file: image },
        {
          onSuccess: (data) => {
            sendUpdate(data.id);
          },
          onError: () => {
            toast.error("Rasm yuklanmadi");
          },
        },
      );
    } else {
      sendUpdate();
    }
  };

  const handleClickEmail = () => {
    if (!userId || !email) return;
    changeEmail(
      { id: userId, email: email },
      {
        onSuccess: (code) => {
          setCode(code);
          setCodeInput(true);
        },
        onError: (e: any) => {
          toast.error(e.response?.data?.message);
        },
      },
    );
  };

  const handleUpdateEmail = () => {
    if (Number(users_code) === code) {
      update(
        { id: Number(userId), data: { email: newEmail } },
        {
          onSuccess: () => {
            toast.success("Email muvaffaqiyatli o'zgartirildi");
            setCodeInput(false);
            setEmailDisabled(true);
            refetch();
          },
          onError: (e: any) => {
            toast.error(e.response?.data?.message);
          },
        },
      );
    } else {
      toast.error("Noto'g'ri kod kiritdingiz!");
    }
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <ProfileWrapper>
      <FlexWrapper>
        <InfoWrapper>
          <LabelInputWrapper>
            <p>Ism</p>
            <input
              disabled={disabled}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </LabelInputWrapper>
          <LabelInputWrapper>
            <p>Familiya</p>
            <input
              disabled={disabled}
              type="text"
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />
          </LabelInputWrapper>
          <LabelInputWrapper>
            <p>Telefon raqam</p>
            <input
              disabled={disabled}
              type="text"
              value={phone_number}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </LabelInputWrapper>
        </InfoWrapper>
        <div
          onClick={() => {
            if (!disabled) {
              inputRef.current?.click();
            }
          }}
          className="avatar"
        >
          {preview ? (
            <img src={preview} alt="" />
          ) : image_url ? (
            <img src={getImageUrl(image_url)} alt="" />
          ) : (
            <ImageWrapper>
              <p>
                {name?.[0]} {surname?.[0]}
              </p>
            </ImageWrapper>
          )}
          {!disabled && (
            <div className="overlay">
              <FiCamera />
            </div>
          )}
          <input
            disabled={disabled}
            type="file"
            hidden
            ref={inputRef}
            accept="image/*"
            onChange={handleImage}
          />
        </div>
      </FlexWrapper>
      {disabled ? (
        <Button
          onClick={() => {
            setDisabled(false);
          }}
        >
          <FiEdit /> Tahrirlash
        </Button>
      ) : (
        <div className="button-wrap">
          <Button onClick={handleUpdate}>
            <HiCheck /> {isPending ? "Saqlanmoqda..." : "Saqlash"}
          </Button>
          <Button onClick={handleCancel}>
            <MdCancel /> Bekor qilish
          </Button>
        </div>
      )}

      <EmailWrapper>
        {!codeInput ? (
          <>
            <LabelInputWrapper>
              <p>Email</p>
              <input disabled type="text" value={email} />
            </LabelInputWrapper>

            {!emailDisabled && (
              <LabelInputWrapper>
                <p>Yangi Emailni kiriting</p>
                <input
                  type="text"
                  value={newEmail}
                  placeholder="...@gmail.com"
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </LabelInputWrapper>
            )}
          </>
        ) : (
          <LabelInputWrapper>
            <p>Avvalgi emailingizga yuborilgan kodni kiriting:</p>
            <input
              type="text"
              placeholder="00000"
              value={users_code}
              onChange={(e) => setUsersCode(e.target.value)}
            />
          </LabelInputWrapper>
        )}
      </EmailWrapper>
      {codeInput ? (
        <Button onClick={handleUpdateEmail}>
          <BiCheckCircle />
          {isPending ? "Tasdiqlanmoqda..." : "Tasdiqlash"}
        </Button>
      ) : emailDisabled ? (
        <Button onClick={() => setEmailDisabled(false)}>
          <FiEdit /> Emailni o'zgartirish
        </Button>
      ) : (
        <Button onClick={handleClickEmail}>
          <BiCheckCircle />
          {isPendingChangeEmail ? "Yuborilmoqda..." : "Kod yuborish"}
        </Button>
      )}
    </ProfileWrapper>
  );
};

export default ProfilePage;
