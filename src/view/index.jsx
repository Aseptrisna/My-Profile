import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Images from "../view/assets/asep.png";

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              {/* <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem> */}
              <MDBBreadcrumbItem active>Asep Trisna Setiawan</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={Images}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">Full Stack Developer PT.LSKK</p>
                <p className="text-muted mb-4">
                  Jl. Sultan Agung No.7, Kota Bandar Lampung, Lampung
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn href="https://www.instagram.com/creative_software17/">
                    Follow
                  </MDBBtn>
                  <MDBBtn
                    outline
                    className="ms-1"
                    href="https://wa.me/+6285841722279"
                  >
                    Message
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    {/* <MDBIcon fas icon="globe fa-lg text-warning" /> */}
                    {/* <MDBCardText>https://mdbootstrap.com</MDBCardText> */}
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                      EDUCATION
                      </span>
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    {/* <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: "#333333" }}
                    /> */}
                    <MDBCardText>S1-Information Systems : 2015-2019, Universitas Bandar Lampung</MDBCardText>
                  </MDBListGroupItem>
                  {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    />
                    <MDBCardText>Instagram</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem> */}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Asep Trisna Setiawan
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Asep.iot@ubl.ac.id
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      082283198216
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      085841722279
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Jl. Sultan Agung No.7, Kota Bandar Lampung, Lampung
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        SKILL
                      </span>
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      System Analyst
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Web Development (React JS)
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      IoT Development
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Mobile Development (React Native, Java)
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Backend API (Node JS, Hapi JS)
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        WORK EXPERIENCE
                      </span>{" "}
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Sistem Monitoring Panel Surya Berbasis Android untuk
                      Manajemen Konsumsi Energi Listrik
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Sistem Pengairan Cerdas Berbasis IoT
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Survei Revisi Study Cell Plan Menara Telekomunikasi dan
                      Pembangunan Sistem Informasi Telekomunikasi Kab. Katingan
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Perancangan dan Pengembaangan Sistem Pencatatan Harian
                      Peserta Praktik Kerja Lapangan Sekolah Menengah Kejuruan
                      (SMK)
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      SMART-CAMERA Penerapan Sensor dan Aktuator pada Sistem
                      Komunikasi Data menggunakan Internet of Things (IoT)
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
