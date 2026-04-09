export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  board?: string;
}

export const education: Education[] = [
  {
    institution: "Daffodil International University, Dhaka",
    degree: "B.Sc. in Computer Science Engineering",
    period: "2014 — 2018",
    gpa: "CGPA 3.90 out of 4.0",
  },
  {
    institution: "Narsingdi Science College",
    degree: "H.S.C Science Group",
    period: "2012 — 2014",
    gpa: "GPA 5.0 out of 5.0",
    board: "Dhaka Board",
  },
  {
    institution: "Satirpara K.K. Institution School and College",
    degree: "S.S.C Science Group",
    period: "2002 — 2011",
    board: "Dhaka Board",
  },
];
