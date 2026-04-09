import { useGetAllSpecialization } from "@/hooks/useSpecialization";
import {
  Button,
  Container,
  DoctorCardWrapper,
  DoctorImageName,
  FirstWarpper,
  FlexWrapper,
  GridWrapper,
  ImgWrapper,
  InputWrapper,
  NameSpec,
  NoImageWrapper,
  Price,
  PriceButton,
  ScrollGridWrapper,
  SearchWrapper,
  SpanWrapper,
  SpecStarWrapper,
  StarWrapper,
} from "./doctor.style";
import { FiSearch } from "react-icons/fi";
import LoadingComponent from "@/components/LoadingComponent/loading";
import ScrollContainer from "react-indiana-drag-scroll";
import { useGetAllDoctor } from "@/hooks/useDoctors";
import {
  FaCalendar,
  FaClock,
  FaStar,
  FaStarHalfAlt,
  FaUserMd,
} from "react-icons/fa";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useMemo, useState } from "react";
import DoctorsNotFound from "@/components/NotFound/notfound";
import BookAppointment from "./bookAppointment/bookAppointment";
import { useGetUserById } from "@/hooks/useUsers";
import NotFound from "@/components/NotFound/notfound";
import { getImageUrl } from "@/utils";

const DoctorsPage = () => {
  const [filter, setFilter] = useState("Barchasi");
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [userId, setUserId] = useState<number>();

  useEffect(() => {
    const id = Number(localStorage.getItem("user_id"));
    setUserId(id);
  }, []);

  const { data: user, isLoading: isUserLoading } = useGetUserById(
    Number(userId),
  );

  const { data: specializations, isLoading: isSpecializationLoading } =
    useGetAllSpecialization();
  const { data: doctors, isLoading: isDoctorLoading } = useGetAllDoctor();

  const filteredDoctors = useMemo(() => {
    if (!doctors) return [];
    return doctors.filter((doctor: any) => {
      const byFilter =
        filter === "Barchasi" || doctor.specialization.name === filter;
      const fullName = `${doctor.name} ${doctor.surname}`.toLowerCase();
      const specName = doctor.specialization.name.toLowerCase();
      const searchText = search.toLowerCase();
      const bySearch =
        fullName.includes(searchText) || specName.includes(searchText);
      return byFilter && bySearch;
    });
  }, [doctors, filter, search]);

  if (selectedDoctor) {
    return (
      <Container>
        {isUserLoading || !user ? (
          <LoadingComponent />
        ) : (
          <BookAppointment
            doctor={selectedDoctor}
            user={user}
            onBack={() => setSelectedDoctor(null)}
          />
        )}
      </Container>
    );
  }

  return (
    <Container>
      {isSpecializationLoading ||
      isDoctorLoading ||
      isUserLoading ||
      specializations.length === 0 ? (
        <LoadingComponent />
      ) : (
        <>
          <SearchWrapper>
            <InputWrapper>
              <FiSearch color="#f1f5f9" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Doktor yoki mutaxasislik bo'yicha qidiring..."
              />
            </InputWrapper>
            <ScrollContainer
              style={{
                width: "95%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                overflowX: "auto",
                gap: "10px",
              }}
            >
              <p
                onClick={() => setFilter("Barchasi")}
                style={{
                  backgroundColor:
                    filter === "Barchasi" ? "#2563eb" : "#1e293b",
                  color: "#e2e8f0",
                  borderRadius: "13px",
                  padding: "3px 10px",
                  cursor: "pointer",
                }}
              >
                Barchasi
              </p>
              {specializations.map((spec: any) => {
                return (
                  <p
                    key={spec.id}
                    style={{
                      backgroundColor:
                        filter === spec.name ? "#2563eb" : "#1e293b",
                      color: "#e2e8f0",
                      borderRadius: "13px",
                      padding: "3px 10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setFilter(spec.name);
                    }}
                  >
                    {spec.name}
                  </p>
                );
              })}
            </ScrollContainer>
          </SearchWrapper>
          {filteredDoctors.length === 0 ? (
            <NotFound
              icon={<FaUserMd color="#94a3b8" size={80} />}
              text="Doktorlar"
            />
          ) : (
            <ScrollGridWrapper>
              {filteredDoctors.map((doctor: any) => {
                return (
                  <DoctorCardWrapper>
                    <FirstWarpper>
                      <DoctorImageName>
                        {doctor.image?.url ? (
                          <ImgWrapper>
                            <img src={getImageUrl(doctor.image.url)} alt="" />
                          </ImgWrapper>
                        ) : (
                          <NoImageWrapper>
                            <p>
                              {doctor.name[0]}
                              {doctor.surname[0]}
                            </p>
                          </NoImageWrapper>
                        )}
                        <NameSpec>
                          <p>
                            {doctor.name} {doctor.surname}
                          </p>
                          <span>{doctor.experience} yil tajriba</span>
                        </NameSpec>
                      </DoctorImageName>
                      <SpecStarWrapper>
                        <span>{doctor.specialization.name}</span>
                        <StarWrapper>
                          <FaStar size={13} color="#facc15" />
                          <FaStar size={13} color="#facc15" />
                          <FaStar size={13} color="#facc15" />
                          <FaStar size={13} color="#facc15" />
                          <FaStarHalfAlt size={13} color="#facc15" />
                          <p>4.9</p>
                        </StarWrapper>
                      </SpecStarWrapper>
                    </FirstWarpper>
                    <GridWrapper>
                      <FlexWrapper>
                        <p>Xona </p>
                        <SpanWrapper>
                          <BsFillDoorOpenFill
                            style={{ display: "inline-block", color: "gray" }}
                          />
                          <p>{doctor.room_number}</p>
                        </SpanWrapper>
                      </FlexWrapper>
                      <FlexWrapper>
                        <p>Ko'rik vaqti </p>
                        <SpanWrapper>
                          <FaClock
                            style={{ display: "inline-block", color: "gray" }}
                          />
                          <p>{doctor.appointment_duration} minut</p>
                        </SpanWrapper>
                      </FlexWrapper>

                      <FlexWrapper>
                        <p>Ish vaqti </p>
                        <SpanWrapper>
                          <FaClock
                            style={{ display: "inline-block", color: "gray" }}
                          />
                          <p>
                            {doctor.working_start_time} -{" "}
                            {doctor.working_end_time}
                          </p>
                        </SpanWrapper>
                      </FlexWrapper>
                      <FlexWrapper>
                        <p>Manzil</p>
                        <SpanWrapper>
                          <FaLocationDot
                            style={{ display: "inline-block", color: "gray" }}
                          />
                          <p>{doctor.address}</p>
                        </SpanWrapper>
                      </FlexWrapper>
                    </GridWrapper>
                    <p>{doctor.spec_description}</p>
                    <PriceButton>
                      <Price>
                        <p>Ko'rik narxi:</p>
                        <span>
                          {doctor.consultation_fee.toLocaleString()} so'm
                        </span>
                      </Price>
                      <Button onClick={() => setSelectedDoctor(doctor)}>
                        <FaCalendar color="white" />
                        Navbat olish
                      </Button>
                    </PriceButton>
                  </DoctorCardWrapper>
                );
              })}
            </ScrollGridWrapper>
          )}
        </>
      )}
    </Container>
  );
};
export default DoctorsPage;
