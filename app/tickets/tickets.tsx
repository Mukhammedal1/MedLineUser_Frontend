import { useEffect, useMemo, useState } from "react";
import {
  Avatar,
  Badge,
  ComplaintBox,
  ComplaintLbl,
  ComplaintTxt,
  DeleteBtn,
  DetailItem,
  DetailLbl,
  DetailVal,
  Divider,
  DocName,
  DocSpec,
  NoImageWrapper,
  Page,
  Tab,
  Tabs,
  TicketBody,
  TicketCard,
  TicketDetail,
  TicketMain,
  TicketsList,
  TicketTop,
  UserImageWrapper,
} from "./tickets.style";
import LoadingComponent from "@/components/LoadingComponent/loading";
import {
  useDeleteAppointment,
  useGetAppointmentByUserId,
} from "@/hooks/useAppointment";
import NotFound from "@/components/NotFound/notfound";
import { FaTicket } from "react-icons/fa6";
import { formatDate } from "@/utils/formatDate";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { getImageUrl } from "@/utils";

const TicketsPage = () => {
  const [filter, setFilter] = useState("all");
  const [userId, setUserId] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const id = Number(localStorage.getItem("user_id")) || 0;
    setUserId(id);
    setMounted(true);
  }, []);

  const {
    data: appointments,
    isLoading,
    refetch,
  } = useGetAppointmentByUserId(userId);
  const { mutate: deleteAppointment } = useDeleteAppointment();
  const filteredAppointments = useMemo(() => {
    if (!appointments) return [];

    return appointments.filter((a: any) => {
      if (filter === "all") return true;
      if (filter === "pending") return a.is_pending === true;
      if (filter === "past") return a.is_pending === false;
      return true;
    });
  }, [appointments, filter]);

  if (!mounted || isLoading) return <LoadingComponent />;

  const handleDelete = () => {
    if (selectedId === null) return;
    deleteAppointment(selectedId, {
      onSuccess: () => {
        toast.success("Navbat o'chirildi");
        setSelectedId(null);
        refetch();
      },
      onError: (e: any) => {
        toast.error(e.response?.data?.message);
      },
    });
  };

  return (
    <Page>
      <Tabs>
        <Tab $active={filter === "all"} onClick={() => setFilter("all")}>
          Barchasi
        </Tab>
        <Tab
          $active={filter === "pending"}
          onClick={() => setFilter("pending")}
        >
          Kutilmoqda
        </Tab>
        <Tab $active={filter === "past"} onClick={() => setFilter("past")}>
          Yakunlangan
        </Tab>
      </Tabs>

      <TicketsList>
        {filteredAppointments.length === 0 ? (
          <NotFound
            icon={<FaTicket color="#94a3b8" size={80} />}
            text="Navbat chiptalari"
          />
        ) : (
          filteredAppointments.map((appointment: any) => {
            return (
              <TicketCard key={appointment.id}>
                <TicketMain>
                  <Avatar>
                    {appointment.doctor?.image?.url ? (
                      <UserImageWrapper>
                        <img
                          src={getImageUrl(appointment.doctor?.image?.url)}
                          alt=""
                        />
                      </UserImageWrapper>
                    ) : (
                      <NoImageWrapper>
                        <p>
                          {appointment.doctor.name[0]}
                          {appointment.doctor.surname[0]}
                        </p>
                      </NoImageWrapper>
                    )}
                  </Avatar>
                  <TicketBody>
                    <TicketTop>
                      <div>
                        <DocName>
                          {appointment.doctor.name} {appointment.doctor.surname}
                        </DocName>
                        <DocSpec>
                          {appointment.doctor.specialization?.name}
                        </DocSpec>
                      </div>
                      <Badge $variant={appointment.is_pending}>
                        {appointment.is_pending ? "Kutilmoqda" : "Yakunlangan"}
                      </Badge>
                    </TicketTop>
                  </TicketBody>
                </TicketMain>
                <Divider />
                <TicketDetail>
                  <DetailItem>
                    <DetailLbl>Bemor</DetailLbl>
                    <DetailVal>
                      {appointment.user?.name} {appointment.user?.surname}
                    </DetailVal>
                  </DetailItem>
                  <DetailItem>
                    <DetailLbl>Navbat vaqti</DetailLbl>
                    <DetailVal>{formatDate(appointment.created_at)}</DetailVal>
                  </DetailItem>
                  <DetailItem>
                    <DetailLbl>Xona</DetailLbl>
                    <DetailVal>{appointment.doctor.room_number}</DetailVal>
                  </DetailItem>
                  <DetailItem>
                    <DetailLbl>Ko'rik to'lov narxi</DetailLbl>
                    <DetailVal>
                      {appointment.doctor.consultation_fee.toLocaleString()}{" "}
                      so'm
                    </DetailVal>
                  </DetailItem>
                </TicketDetail>

                <ComplaintBox>
                  <ComplaintLbl>Shikoyat</ComplaintLbl>
                  <ComplaintTxt>{appointment.complaint}</ComplaintTxt>
                </ComplaintBox>
                <DeleteBtn onClick={() => setSelectedId(appointment.id)}>
                  <BiTrash />
                  Navbatni o'chirish
                </DeleteBtn>
              </TicketCard>
            );
          })
        )}
      </TicketsList>
      <Dialog
        open={selectedId !== null}
        onClose={() => setSelectedId(null)}
        PaperProps={{
          sx: {
            backgroundColor: "#0f1f35",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            width: "340px",
            maxWidth: "90vw",
            textAlign: "center",
          },
        }}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(2px)",
          },
        }}
      >
        <IconButton
          onClick={() => setSelectedId(null)}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            color: "rgba(255,255,255,0.35)",
            "&:hover": { color: "rgba(255,255,255,0.7)" },
          }}
        ></IconButton>

        <DialogContent sx={{ pt: 4, pb: 1, px: 3 }}>
          <BiTrash size={52} color="#ef4444" />

          <DialogContentText
            sx={{
              mt: 2,
              mb: 1,
              fontSize: 16,
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Haqiqatan ham o'chirmoqchimisiz?
          </DialogContentText>

          <DialogContentText
            sx={{
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.6,
            }}
          >
            Bu amalni ortga qaytarib bo'lmaydi.
          </DialogContentText>
        </DialogContent>

        <DialogActions
          sx={{
            flexDirection: "column",
            gap: 1,
            px: 3,
            pb: 3,
            pt: 2,
          }}
        >
          <Button
            fullWidth
            onClick={handleDelete}
            variant="contained"
            sx={{
              backgroundColor: "#ef4444",
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 500,
              fontSize: 15,
              py: 1.4,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#dc2626",
                boxShadow: "none",
              },
            }}
          >
            O'chirish
          </Button>
          <Button
            fullWidth
            onClick={() => setSelectedId(null)}
            sx={{
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 400,
              fontSize: 15,
              py: 1.4,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            Bekor qilish
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
};

export default TicketsPage;
