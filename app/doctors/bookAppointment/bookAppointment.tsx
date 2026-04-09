import { FaCalendar, FaCheck, FaChevronLeft, FaClock } from "react-icons/fa";
import {
  Avatar,
  BackBtn,
  CodeBox,
  CodeLabel,
  CodeValue,
  ConfirmBox,
  ConfirmKey,
  ConfirmRow,
  ConfirmVal,
  DayCard,
  DayName,
  DayNum,
  DAYS,
  DaysRow,
  DocBanner,
  DocInfoItem,
  DocInfoRow,
  DocMeta,
  DocName,
  DocSpec,
  FieldLabel,
  OkCircle,
  PrimaryBtn,
  ProgressBar,
  ProgressDot,
  Props,
  SectionLabel,
  Slot,
  SlotsGrid,
  Step,
  SuccessSub,
  SuccessTitle,
  SuccessWrap,
  TAKEN_IDX,
  TextArea,
  TIMES,
  Wrap,
} from "./bookAppointment.style";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-toastify";
import { generateTimeSlots } from "@/utils/generateTime";
import {
  useCreateAppointment,
  useGetDoctorSlots,
} from "@/hooks/useAppointment";
import { useRouter } from "next/router";
import { getImageUrl } from "@/utils";

const BookAppointment = ({ doctor, user, onBack }: Props) => {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [complaint, setComplaint] = useState("");
  const [selDay, setSelDay] = useState<string>(DAYS[0][0] + " " + DAYS[0][1]);
  const [selTime, setSelTime] = useState<string>("");
  const [code] = useState(() =>
    Math.floor(100000 + Math.random() * 900000).toString(),
  );

  const { mutate: createAppointment, isPending } = useCreateAppointment();
  const { data: takenSlots = [], isLoading } = useGetDoctorSlots(doctor.id);

  const initials = `${doctor.name[0]}${doctor.surname[0]}`;
  const timeSlots = generateTimeSlots(
    doctor.working_start_time,
    doctor.working_end_time,
    doctor.appointment_duration,
  );

  const goStep2 = () => {
    if (!complaint) {
      toast.error("Iltimos shikoyatingizni yozing");
      return;
    }
    setStep(2);
  };

  const goStep3 = () => {
    if (!selTime) {
      toast.error("Iltimos vaqtni tanlang");
      return;
    }
    setStep(3);
  };

  const playSound = () => {
    const audio = new Audio("/sounds/4.mp3");
    audio.play();
  };
  const submit = () => {
    createAppointment(
      {
        user: user.id,
        doctor: doctor.id,
        appointment_time: selTime,
        complaint,
      },
      {
        onSuccess: (data) => {
          playSound();
          toast.success("Navbat muvaffaqiyatli olindi");
          router.push("/tickets");
        },
        onError: (e: any) => {
          toast.error(e.response.data.message);
        },
      },
    );
  };

  return (
    <Wrap>
      <BackBtn onClick={onBack}>
        <FaChevronLeft size={15} /> <p>Orqaga</p>
      </BackBtn>
      <DocBanner>
        <Avatar>
          {doctor.image?.url ? (
            <img
              src={getImageUrl(doctor.image.url)}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
                objectFit: "cover",
              }}
            />
          ) : (
            initials
          )}
        </Avatar>
        <DocMeta>
          <DocName>
            {doctor.name} {doctor.surname}
          </DocName>
          <DocSpec>{doctor.specialization.name}</DocSpec>
          <DocInfoRow>
            <DocInfoItem>
              <BsFillDoorOpenFill /> Xona {doctor.room_number}
            </DocInfoItem>
            <DocInfoItem>
              <FaClock /> {doctor.working_start_time.slice(0, 5)}-
              {doctor.working_end_time.slice(0, 5)}
            </DocInfoItem>
            <DocInfoItem>
              <FaLocationDot /> {doctor.address}
            </DocInfoItem>
          </DocInfoRow>
        </DocMeta>
      </DocBanner>

      {step < 4 && (
        <ProgressBar>
          <ProgressDot $active={step >= 1} />
          <ProgressDot $active={step >= 2} />
          <ProgressDot $active={step >= 3} />
        </ProgressBar>
      )}

      {step === 1 && (
        <div style={{ width: "100%" }}>
          <SectionLabel>Bemor shikoyati</SectionLabel>
          <FieldLabel>Shikoyatingizni yozing:</FieldLabel>
          <TextArea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Shikoyatingiz..."
          />
          <PrimaryBtn style={{ maxWidth: 200 }} onClick={goStep2}>
            Keyingi →
          </PrimaryBtn>
        </div>
      )}

      {step === 2 && (
        <div>
          <SectionLabel>Qulay vaqtni tanlang</SectionLabel>
          <SlotsGrid>
            {timeSlots.map((t, i) => {
              const taken = TAKEN_IDX.includes(i);
              return (
                <Slot
                  key={t}
                  $sel={selTime === t}
                  $taken={takenSlots.includes(t)}
                  onClick={() => !takenSlots.includes(t) && setSelTime(t)}
                >
                  {t}
                </Slot>
              );
            })}
          </SlotsGrid>
          <PrimaryBtn style={{ maxWidth: 220 }} onClick={goStep3}>
            Keyingi →
          </PrimaryBtn>
        </div>
      )}

      {step === 3 && (
        <div>
          <SectionLabel>Tasdiqlang</SectionLabel>
          <ConfirmBox>
            <ConfirmRow>
              <ConfirmKey>Bemor</ConfirmKey>
              <ConfirmVal>
                {user.name} {user.surname}
              </ConfirmVal>
            </ConfirmRow>
            <ConfirmRow>
              <ConfirmKey>Shifokor</ConfirmKey>
              <ConfirmVal>
                {doctor.name} {doctor.surname}
              </ConfirmVal>
            </ConfirmRow>
            <ConfirmRow>
              <ConfirmKey>Sana</ConfirmKey>
              <ConfirmVal $accent>{selDay}, 2025</ConfirmVal>
            </ConfirmRow>
            <ConfirmRow>
              <ConfirmKey>Vaqt</ConfirmKey>
              <ConfirmVal $accent>{selTime}</ConfirmVal>
            </ConfirmRow>
            <ConfirmRow>
              <ConfirmKey>Ko'rik narxi</ConfirmKey>
              <ConfirmVal>
                {doctor.consultation_fee?.toLocaleString()} so'm
              </ConfirmVal>
            </ConfirmRow>
          </ConfirmBox>
          <PrimaryBtn onClick={submit}>Tasdiqlash</PrimaryBtn>
        </div>
      )}

      {/* {step === 4 && (
        <SuccessWrap>
          <OkCircle>
            <FaCheck size={22} color="#1D9E75" />
          </OkCircle>
          <SuccessTitle>Navbat muvaffaqiyatli olindi!</SuccessTitle>
          <SuccessSub>SMS orqali tasdiqlash xabari yuborildi</SuccessSub>
          <CodeBox>
            <CodeLabel>Tasdiqlash kodi</CodeLabel>
            <CodeValue>{code}</CodeValue>
          </CodeBox>
          <PrimaryBtn style={{ maxWidth: 180 }} onClick={onBack}>
            Orqaga qaytish
          </PrimaryBtn>
        </SuccessWrap>
      )} */}
    </Wrap>
  );
};

export default BookAppointment;
