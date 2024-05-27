const healthcareServicesData = [
  {
    id: 1,
    icon: (
      <svg height="40" width="40"viewBox="0 0 25 25" className="fill-current">
        <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z" />
      </svg>
    ),
    title: "Gematik Integration & FHIR Adoption",
    paragraph:
      "We provide services for adapting FHIR and connection to Gematik.",
  },
  {
    id: 1,
    icon: (
      <svg height="40" width="40"viewBox="0 0 25 25" className="fill-current">
        <path d="M3,1C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16C4.33,16 7,16 7,16C7,16 7,18.67 7,20C7,21.11 7.89,22 9,22H20C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7C18.67,7 16,7 16,7C16,7 16,4.33 16,3C16,1.89 15.11,1 14,1H3M3,3H14C14,4.33 14,7 14,7H9C7.89,7 7,7.89 7,9V14C7,14 4.33,14 3,14V3M9,9H14V14H9V9M16,9C16,9 18.67,9 20,9V20H9C9,18.67 9,16 9,16H14C15.11,16 16,15.11 16,14V9Z" />
      </svg>
    ),
    title: "Adopt IHE profiles",
    paragraph: "We help healthcare providers to adopt IHE profiles.",
  },
  {
    id: 1,
    icon: (
      <svg height="40" width="40"viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
        />
        <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z" />
      </svg>
    ),
    title: "Medical devices integration",
    paragraph:
      "We do medical devices integration with existing EMR / EHR (hospital software).",
  },
  {
    id: 1,
    icon: (
      <svg height="40" width="40"viewBox="0 0 25 25" className="fill-current">
        <path d="M2,22V7A1,1 0 0,1 3,6H7V2H17V6H21A1,1 0 0,1 22,7V22H14V17H10V22H2M9,4V10H11V8H13V10H15V4H13V6H11V4H9M4,20H8V17H4V20M4,15H8V12H4V15M16,20H20V17H16V20M16,15H20V12H16V15M10,15H14V12H10V15Z" />
      </svg>
    ),
    title: "EMR/EHR (Hospital Software)",
    paragraph:
      "We implement EMR / EHR ( hospital software ) in the hospitals to digitise their workflow.",
  },
  {
    id: 1,
    icon: (
      <svg height="40" width="40"viewBox="0 0 25 25" className="fill-current">
        <path d="M18,14H14V18H10V14H6V10H10V6H14V10H18M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>
    ),
    title: "Implementation Readiness",
    paragraph: "We analyse Healthcare Software for Implementation Readiness.",
  },
  {
    id: 1,
    icon: (
      <svg height="40" width="40"viewBox="0 0 25 25" className="fill-current">
        <path d="M13 4H11L10 2H14L13 4M14 8V6H15V5H9V6H10V8C7.24 8 5 10.24 5 13V22H19V13C19 10.24 16.76 8 14 8M16 17H13V20H11V17H8V15H11V12H13V15H16V17Z" />
      </svg>
    ),
    title: "Investment Readiness",
    paragraph: "We analyse Healthcare Software for Investment Readiness.",
  },
];
export default healthcareServicesData;
