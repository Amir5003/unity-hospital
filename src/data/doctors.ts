export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  description: string;
  contact: string[];
  address: string;
  image: string;
}

export const doctors: Doctor[] = [
  {
    id: "asad-akram",
    name: "Dr. Asad Akram",
    specialty: "Orthopedics",
    qualification: "MBBS, MS ORTHOPEDICS",
    description: `
      हड्डियों को स्वस्थ रखने के लिए सुझाव:
      • कैल्शियम युक्त आहार जैसे दूध, पनीर, दही, हरी सब्जियाँ, बीन्स आदि का सेवन करें।
      • विटामिन D की पर्याप्त मात्रा लें, ताकि शरीर में कैल्शियम का अवशोषण सही तरीके से हो।
      • पोटेशियम, मैग्नीशियम और अन्य खनिज कैल्शियम के अवशोषण में सहायक होते हैं।
      • हड्डियों को मजबूत रखने के लिए शारीरिक गतिविधि ज़रूरी है – सप्ताह में कम से कम 150 मिनट।
    `,
    contact: ["9631014684", "9835629473"],
    address: "Bihar Talkies Road, Purnia, Bihar",
    image: "/DrAsadAkram.png",
  },
  {
    id: "aashia-rumman",
    name: "Dr. Aashia Rumman",
    specialty: "Obs & Gynae",
    qualification: "MBBS, M.S.OBS GYNAE",
    description: `
      महिला रोग विशेषज्ञ सेवाएं:
      • नॉर्मल डिलीवरी, दर्द रहित डिलीवरी, सिजेरियन डिलीवरी
      • गर्भधारण का ऑप्रेशन दूरबीन द्वारा
      • परिवार नियोजन, गर्भ निरोध
      • गर्भाशय, अंडाशय की सभी बीमारियों का उपचार
      • INFERTILITY (निसंतानता का इलाज)
      • बच्चेदानी के कैंसर की रोकथाम के लिए स्क्रीनिंग व टीकाकरण
      • PRE-MARITAL & POST-MARITAL COUNSELING
    `,
    contact: ["9631014684", "9835629473"],
    address: "Bihar Talkies Road, Line Bazar, Purnea, 854301",
    image: "/DrAshiya.png",
  },
];