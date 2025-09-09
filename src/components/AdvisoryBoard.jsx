import React from "react";
import { FaLinkedin } from "react-icons/fa";
import hero from "../assets/adv.jpg";
import contact from "../assets/contact.png";
import nijo from "../assets/nijo.jpg";
import shiny from "../assets/shiny.jpg";
import { Linkedin } from "lucide-react";

// Data grouped by categories from document
const committeeData = {
  chiefPatron: [
    {
      name: "Rev. Fr. Benny Nalkara CMI",
      designation: "Provincial, CMI Sacred Heart Province, Kochi ",
      photo: "https://www.rajagiritech.ac.in/home/aboutus/images/Fr.Benny.jpg"
    },
  ],
  patrons: [
    { name: "Rev. Dr. Jose Kuriedath CMI", designation: "Director, RSET",photo:"https://www.rajagiritech.ac.in/home/aboutus/images/JoseKuriedath.png" },
    { name: "Rev. Dr. Mathew Vattathara CMI", designation: "Director, RCMAS",photo:"https://www.rajagiri.international/images/blog-images/feb2018/image17.jpeg" },
    { name: "Rev. Dr. George Peter Pittappillil CMI", designation: "Director, MITHRADHAM",photo:"https://www.kreepa.org/images/member/member0010904001661958581.jpg" },
  ],
  advisoryMembers: [
    { name: "Mr. V. K. Mathews", designation: "Executive Chairman, IBS Software, Kochi & Chairman, GTech", linkedin: "https://www.linkedin.com/in/v-k-mathews-08b0a2187/?originalSubdomain=ae" ,photo:"https://ictkerala.org/uploads/2024/06/7.png "},
    { name: "Mr. Loknath Behara, IPS", designation: "MD, KMRL & KWML", linkedin: "https://www.linkedin.com/in/loknath-behera-980553320/?originalSubdomain=in",photo:"https://media.licdn.com/dms/image/v2/D5603AQGS4AntQ2kFMA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722329883503?e=2147483647&v=beta&t=0mbuvq96pQ0Wv1TDHxaAydGvlx7xUKqNbWYMZvlQIVM" },
    { name: "Mr. Susanth Kuruntil", designation: "CEO, InfoPark, Kochi", linkedin: "https://www.linkedin.com/in/susanthk",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6WRR-92DJVLhql497zx_TuzegvgCxUrMqQ&s" },
    { name: "Mr. Sanjeev Nair", designation: "CEO, Technopark Kerala", linkedin: "https://www.linkedin.com/in/sanjeevnair13",photo:"https://bl-i.thgim.com/public/incoming/svsogi/article66373158.ece/alternates/LANDSCAPE_1200/Sanjeev%20Nair%20-%20CEO%20Technopark.jpg" },
    { name: "Mr. Anoop Ambika", designation: "CEO, KSUM", linkedin: "https://www.linkedin.com/in/anoopambika",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqD8zlrnu52jXTZH8PW47Jtqi-pzM_SrSTA&s" },
    { name: "Mr. Sudheer", designation: "Transformation Leader, IBM Kochi", linkedin: "https://www.linkedin.com/in/sudheerkareem/?originalSubdomain=in",photo:"https://media.licdn.com/dms/image/v2/D4D03AQHNPm-RVogqHA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693569267633?e=2147483647&v=beta&t=YGN34ARPHjWJvxypj_5OghusjE3j-ruIfa5K-SY0x2k" },
    { name: "Mr. Dinesh P. Thampi", designation: "Vice President & Delivery Centre Head - Kerala, TCS", linkedin: "https://www.linkedin.com/in/dineshthampi/?originalSubdomain=in", photo: "https://ictkerala.org/uploads/2024/06/3-1.png" },
    { name: "Mr. Rajeev Sreenivas", designation: "Region Head, Academic Alliances, TCS, Kochi", linkedin: "https://www.linkedin.com/in/rajeevsrinivas",photo:"https://media.licdn.com/dms/image/v2/D5603AQFiN6vQnjeu7Q/profile-displayphoto-crop_800_800/B56Zi2.vlXHUAM-/0/1755416559391?e=1758758400&v=beta&t=IWHX8oyEx-GXg8x58a4e_2XU_J8piXMFFtiaVxhAut0" },
    { name: "Mr. Richard Antony", designation: "Executive Director, EY GDS, Transformation and India Location leader", linkedin: "https://www.linkedin.com/in/richard-antony-6305784",photo:"https://s3.amazonaws.com/media.mixrank.com/profilepic/cd6a36ee2429db08682ca783f7076a21" },
    { name: "Mr. Vinod V. S.", designation: "Senior Manager, EY GDS", linkedin: "https://www.linkedin.com/in/vsvinod",photo:"https://media.licdn.com/dms/image/v2/C5603AQETSwULj7JJ4Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662398535088?e=1758758400&v=beta&t=On7PdJCzZ9Apa-H7Gdm3wCCdo7ZRTynsQB3akN4SeyE" },
    { name: "Mr. Binu Sankar", designation: "Senior Manager, EY GDS, Operations", linkedin: "https://www.linkedin.com/in/binusankar/?originalSubdomain=in",photo:"https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/binu-sankar-f89812c6" },
    { name: "Mr. Nijo Pothen", designation: "Technology Business Relationship Manager, EYGBS (India) LLP", linkedin: "https://www.linkedin.com/in/nijo-p-pothen-2395366" , photo:nijo },
    { name: "Ms. Nazneen Jehangir", designation: "Executive Director & CEO (Software Business), NeST Group", linkedin: "https://www.linkedin.com/in/nazneen-jehangir-9735032b",photo: "https://cdn.theorg.com/22293786-f15a-4efd-80cb-2e87e7d4dda3_medium.jpg" },
    { name: "Mr. Altaf Jehangir", designation: "CEO & Executive Director, NeST Sfo Technologies", linkedin: "https://www.linkedin.com/in/althaf-jehangir-309ab810" , photo: "https://sfotechnologies.net/images/leader_2-2.jpg" },
    { name: "Dr. John Jose", designation: "IEEE India Council", linkedin: "https://www.linkedin.com/in/john-jose-bb8431106", photo: "https://portal.aiori.in/wp-content/uploads/2025/05/sp11.jpg" },
    { name: "Dr. Ujjwal K. Bhattacharya", designation: "MD, Steag Energy Services India", linkedin: "https://www.linkedin.com/in/ujjwal-bhattacharya-a43437106/?trk=opento_nprofile_details", photo: "https://www.steag.in/fileadmin/user_upload/FM_SES/India/2023/2025/IMG_0294.jpg" },
    { name: "Mr. Saji S.", designation: "CEO, KEID",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUGtvPfoQEuQqa6xiCHW56YD_yEXK1lg7wg&s" },
    { name: "Mr. Sreekumar V.", designation: "Centre Head, TATA ELXSI & Secretary, GTech", linkedin: "https://www.linkedin.com/in/sreekumarv",photo:"https://gtechindia.org//uploads/leadership_team/Sreekumar%20V.jpg" },
    { name: "Mr. Deepu S. Nath", designation: "MD, Faya Innovations & Convenor, GTech ATFG", linkedin: "https://www.linkedin.com/in/deepusnath",photo:"https://pbs.twimg.com/profile_images/1716672479383748608/8mdfCaaW_400x400.jpg" },
    { name: "Dr. Sebastian Thomas", designation: "Dy GM, KSIDC", linkedin: "https://www.linkedin.com/in/sebastian-thomas-8a87b3122",photo:"https://media.licdn.com/dms/image/v2/D5603AQG2lKUSNPEmhA/profile-displayphoto-shrink_200_200/B56ZYv9sP_GUAY-/0/1744561424465?e=2147483647&v=beta&t=i6JmLX4bIh9aCkfz7eCx4EON48tbvk-1ECwYT_8i6rY" },
    { name: "Mr. Thomas John", designation: "MD, Agappe Diagnostics Ltd", linkedin: "https://www.linkedin.com/in/thomas-john-78960a25",photo:"https://www.agappe.com/media/cache/480x0/about-us/six/web/director1_1605889084.webp" },
    { name: "Mr. Nasif N. M.", designation: "Head of Programs & Communications, KSUM", linkedin: "https://www.linkedin.com/in/nasifnm",photo:"https://media.licdn.com/dms/image/v2/D5603AQG0xSN-3MVlGA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666241255900?e=1758758400&v=beta&t=mR3YtWWJZqpi7Qdtci9GgYhZtJGvEaR758AH5kEZl_M" },
    { name: "Mr. Anish Varghese", designation: "Lead Engineer, UVJ Technologies Pvt Ltd, Progressive Techies", linkedin: "https://www.linkedin.com/in/anishpanthalani",photo:"https://media.licdn.com/dms/image/v2/D5603AQGUPfZx7WbZtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712174023566?e=1758758400&v=beta&t=PDIvs3gOF6kdrkcyuroSUBcuTY1qttRvbGbe0QT7C_M" },
    { name: "Mr. B. S. Manoj", designation: "IEEE Kerala Section", linkedin: "https://www.linkedin.com/in/bsmanoj/",photo:"https://media.licdn.com/dms/image/v2/D4D03AQGxMx9NKtCQjw/profile-displayphoto-crop_800_800/B4DZg9mbV9HAAY-/0/1753380140989?e=1758758400&v=beta&t=WOIJFUhEX8di1B6i4sChWd9jGoYhGMdlS1jcNfPGnXk" },
    { name: "Mr. Athul Ram", designation: "CEO, Verdatum AI & Alumnus, RSET", linkedin: "https://www.linkedin.com/in/athulram/",photo :"https://i.ytimg.com/vi/6Z3Cg7eS6NE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gPCgVMA8=&rs=AOn4CLD0xRcFQrwANNyP-fqIDBaolGORIw" },
    { name: "Mr. Rijin John", designation: "Silizium Circuits & Alumnus , RSET", linkedin: "https://www.linkedin.com/in/rijinjohn",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbm3GKXFJ64zlWWS6ukjslk3q5Sah68Xz-pA&s" },
    { name: "Mr. Jakes Bejoy", designation: "Music Director & Alumnus, RSET", linkedin: "https://www.linkedin.com/in/jakesbejoy/", photo:"https://media.newindianexpress.com/newindianexpress%2F2024-09-06%2F11p525bu%2FFEELIN.jpg?w=768&auto=format%2Ccompress" },
    { name: "Dr. Nithish T. Jacob", designation: "Industry Academia Advisory Member & Observer", linkedin: "https://www.linkedin.com/in/ntj",photo:"https://qcollective.in/wp-content/uploads/2020/06/pro-e1590501392524-2.jpg" },
    { name: "Mr. Prasad", designation: "MiPHi", linkedin: "https://www.linkedin.com/in/prasadbalakrishnan/?originalSubdomain=in",photo:"https://indiannewsandtimes.com/wp-content/uploads/2025/03/Prasad_Balakrishnan__COO__MiPhi__2_.jpg" },
    { name: "Mr. Arun kumar T.V.", designation: " CEO , Saasvaap, and RSET PTA Vice President", linkedin: "https://www.linkedin.com/in/a-k-68b09610/",photo:"https://saasvaap.com/wp-content/uploads/arunheadsho1t-1.png"},
    { name: "Mr. Muhammed Shafeeq.N", designation: "Secretary KREEPA for Renewable Energy Industry", linkedin: "https://www.linkedin.com/in/mohamedshaffeeq/?originalSubdomain=in",photo:"https://www.kreepa.org/images/member/member0089159001684218904.jpg"},
    { name: "Mr. Lovegin John", designation: "Founder and CEO of Cubet Techno Labs",linkedin: "https://www.linkedin.com/in/lovegin/?originalSubdomain=uk",photo: "https://bni-india.in/web/open/appsCmsImageDownload?imageObjectId=601930750cf23d0aeb0b2ca0"},
    { name: "Mr. Sreekumar Balachandran", designation: "Global IT Head - SunTec Group, President - Kerala Chapter",linkedin: "https://in.linkedin.com/in/sugeesh-s?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",photo:"https://media.licdn.com/dms/image/v2/C4E03AQF3WWkntPhXzQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1606375070098?e=1759363200&v=beta&t=YAf1XyQQo81f1h_ttvI4n03yLfYxKJzidQ1U8QC6fds"},
    { name: "Mr. Sugeesh Subrahmanian", designation: "Director Speridian Technologies",linkedin:"https://www.linkedin.com/in/sugeesh-s/",photo:"https://media.licdn.com/dms/image/v2/D5603AQHOnPtkAjSAkQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681387818454?e=1759363200&v=beta&t=MlLQlRPh2Jq88hfoPEoKZ89NLPRlqk9nQ1KkSKsww2I"},
    { name: "Ms. Saritha P.S." , designation: "VP & Kochi Center Head ,Cognizant", linkedin:"https://www.linkedin.com/in/saritha-p-a-1982821a/?originalSubdomain=in",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHoEIbGjNb5ftLaxT_zPgPLJ--AfC16e3dQ&s"},


  ],
  management: [
    { name: "Rev. Fr. Ajeesh Puthussery CMI",photo:"https://www.christujayanthi.ac.in/wp-content/uploads/2024/06/Fr_ajeesh.jpg" },
    { name: "Rev. Dr. Saju M. D. CMI", linkedin:"https://www.linkedin.com/in/dr-saju-m-d-b82b6316/?originalSubdomain=in",photo:"https://rajagiri.edu/uploads/faculty-profile/36/image.jpg" },
    { name: "Rev. Dr. Jaison Paul Mulerikkal CMI", linkedin:'https://www.linkedin.com/in/jaisonmpaul/?originalSubdomain=in',photo:"https://www.shcollege.ac.in/wp-content/uploads/Fr.-Jaison.jpg" },
    { name: "Dr-Ing. Fr. Varghese Panthalookaran CMI",linkedin:"https://www.linkedin.com/in/varghese-panthalookaran-aa5215109/?originalSubdomain=in",photo: "https://www.rajagiritech.ac.in/stud/Faculty/Photo/varghese.jpg" },
    { name: "Rev. Dr. Joseph Varghese CMI ",linkedin:"https://www.linkedin.com/in/fr-joseph-varghese-kusumalayam-21650a296/",photo: "https://www.shcollege.ac.in/wp-content/uploads/Images/Staff/Teaching/Fr.-Joseph-Varghese.jpg" },
    { name: "Rev. Dr. Joel George Pullolil CMI",linkedin:"https://www.linkedin.com/in/joel-george-b26a18156/?originalSubdomain=in",photo:"https://www.rajagiritech.ac.in/home/aboutus/images/joelpg.png" },
    { name: "Rev. Dr. Francis Manavalan CMI", linkedin:'https://www.linkedin.com/in/francis-manavalan-714ba418/?originalSubdomain=in',photo:'https://www.christujayanthi.ac.in/wp-content/uploads/2020/10/Fr-FrancisManavalan.jpg' },
    { name: "Rev. Fr. Dipin Karingen CMI",photo:"https://rajagiriviswajyothi.org/wp-content/uploads/2019/11/fr-dipin.jpg" },

  ],
  mentors: [
    { name: "Dr. Laly Mathew", designation: "RCMAS",photo:'https://www.rajagiricollege.edu.in/content/uploads/2025/03/IMG20241113121232-edited-scaled.jpg' },
    { name: "Prof. Biju C.S.", designation: "SH Thevara",photo:"https://www.shcollege.ac.in/wp-content/uploads/Principal.jpg" },
    // { name: "Dr. Devasia M. D.", designation: "RVCAS" ,linkedin:"https://www.linkedin.com/in/prof-dr-devasia-m-d-ab0265202/?originalSubdomain=in",photo:"https://media.licdn.com/dms/image/v2/D4E03AQG-A39WDXj0Pw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706281775008?e=1758758400&v=beta&t=nalABTyF8CXb6LRAdnxAjE8YvDS7TzUV-mUgMNssEEM"},
    { name: "Prof. Dr. Gimpson D. Parambil", designation: "RVCAS",linkedin:"http://linkedin.com/in/gimson-d-parambil-47464655",photo:"https://rajagiriviswajyothi.org/wp-content/uploads/2025/06/image.png" },
    { name: "Dr. Kishore G. Pillai", designation: "RBS",linkedin:"https://www.linkedin.com/in/kishore-gopalakrishna-pillai-603b921/?originalSubdomain=in",photo:"https://www.rajagiribusinessschool.edu.in/uploads/faculty-profile/97/97.jpg" },
  ],
  institutional: [
    { name: "Mr. Nitheesh Kurian", designation: "ECE, RSET",linkedin:'https://www.linkedin.com/in/nitheesh07/?originalSubdomain=in',photo:"https://media.licdn.com/dms/image/v2/D5603AQF3hNP655Hjtw/profile-displayphoto-shrink_200_200/B56ZSoOuCsGQAc-/0/1737989219681?e=1758758400&v=beta&t=ptoSeqK5iIK5Vy0ezm0NwJn5OBuHyP9b5mbzCpzbClw" },
    { name: "Dr. Divya James", designation: "CSBS, RSET",linkedin:"https://www.linkedin.com/in/divya-james-10b895b3/?originalSubdomain=in",photo:"https://www.rajagiritech.ac.in/stud/Faculty/Photo/DIVYAJ.jpg" },
    { name: "Ms. Sangeetha Jamal", designation: "CSE, RSET",linkedin:"https://www.linkedin.com/in/sangeetha-jamal-47908249/?originalSubdomain=in",photo:"https://www.rajagiritech.ac.in/stud/Faculty/Photo/SANGEETHAJ.jpg" },
    { name: "Mr. Vineeth Krishna P.", designation: "ME, RSET",linkedin:"https://www.linkedin.com/in/vineeth-krishna-p/",photo:"https://www.rajagiritech.ac.in/stud/Faculty/Photo/VINEETHKP.jpg" },
    { name: "Ms. Ardra C. Michael", designation: "RCMAS",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tPZO2m-VnukgSv5ofpYfPjEP1OZNn2b88A&s",linkedin:"https://www.linkedin.com/in/ardracmichael/" },
    { name: "Ms. Anila Varghese", designation: "RCMAS",linkedin:"https://www.linkedin.com/in/anila-varghese-38322367/?originalSubdomain=in",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9v1WXXVDvhz0cS0UHjIWosapqDsShrp49A&s" },
    { name: "Mr. Basil C. Paul", designation: "RVCAS",linkedin:"https://www.linkedin.com/in/basil-c-paul-666167190/?originalSubdomain=in",photo:"https://media.licdn.com/dms/image/v2/D5603AQH0-bSiKxYB3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677661284975?e=1758758400&v=beta&t=nex39OoAD8EEQW0OjhtBC8Q9hbV7nSd1FHPYsBxWALg" },
    { name: "Ms. Sridevi K.S.", designation: "RVCAS",linkedin:"https://www.linkedin.com/in/sridevi-k-s-339a04260/?originalSubdomain=in",photo:"https://rajagiriviswajyothi.org/wp-content/uploads/2014/03/sreedevi.jpg" },
    { name: "Ms. Shiny K.P. ", designation: "RVCAS",linkedin:"https://www.linkedin.com/in/shiny-k-p/?originalSubdomain=in",photo:shiny },
    { name: "Dr. Angela Susan Mathew", designation: "RBS",linkedin:"https://www.linkedin.com/in/angela-susan-mathew-6b533219a/?originalSubdomain=in",photo:"https://www.rajagiribusinessschool.edu.in/uploads/faculty-profile/69/69.jpg" },
    { name: "Ms. Jaya Vijayan", designation: "RCSS",linkedin:"https://www.linkedin.com/in/jaya-vijayan-612839166/?originalSubdomain=in",photo:"https://media.licdn.com/dms/image/v2/D5603AQFq66lEJ4WrUw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668579232972?e=1758758400&v=beta&t=aysLYYIj3IKzNLNWfJrCCy7ul4wsbbpCnuYNN2h-lFE"},
    { name: "Dr. Krupa B. Nair", designation: "RCSS",linkedin:"https://www.linkedin.com/in/krupa-nair-61b95b310/?originalSubdomain=in",photo:"https://media.licdn.com/dms/image/v2/D4D03AQF6S2KOMNpYuQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722403436124?e=1758758400&v=beta&t=R54KPoPAgOHxGUePJ1T2aeH-CySjGZyrV9_iE6tlj2M"},
    { name: "Dr. Amal Tom Jose", designation: "RCSS",linkedin:"https://www.linkedin.com/in/dr-amal-tom-jose-25879b111/?originalSubdomain=in",photo:"https://media.licdn.com/dms/image/v2/D5603AQE464YG54eOag/profile-displayphoto-shrink_800_800/B56ZNYK4.uGgAc-/0/1732351074956?e=1758758400&v=beta&t=-oMNbKZ0Py9ImXFeQGrZVKy4tUNpofpf2LBmKqvlAAg"},
    { name: "Dr. Varghese Joy", designation: "RCSS",linkedin:"https://www.linkedin.com/in/varghesejoy/?originalSubdomain=in",photo:"https://media.licdn.com/dms/image/v2/D5603AQHU6k6Mcvf-MQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682926173870?e=1758758400&v=beta&t=o2zrb2TnKfwd8buHdcV6uvnn6BgmL6Ae8nv9f1xViFM"},
    { name: "Prof. Sanjose A. Thomas", designation: "SH",linkedin:"https://www.linkedin.com/in/sanjose-a-thomas-17501323a/",photo:"https://www.shcollege.ac.in/wp-content/uploads/Images/Staff/Teaching/Sanjose-A-Thomas.jpg"},





  ],
};



function Section({ title, members }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl sm:text-4xl text-center mb-6 text-gray-900 font-[Poppins]">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center p-4 sm:p-6 text-center w-64"
          >
            <div className="relative">
              <img
                src={member.photo ? member.photo : contact}
                alt={member.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-gray-200 shadow-sm transition-transform duration-300 ease-in-out hover:scale-110 sm:hover:scale-125"
              />
            </div>
            <h3 className="mt-4 text-lg sm:text-xl text-gray-900">{member.name}</h3>
            {member.designation && (
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {member.designation}
              </p>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-4 text-blue-600 hover:text-blue-800 transition"
              >
                <FaLinkedin size={24} className="sm:h-7 sm:w-7" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdvisoryCommittee() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
      className="relative bg-cover bg-center h-64 sm:h-80 flex items-center justify-center text-white"

        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
        <h1 className="text-3xl sm:text-5xl font-bold relative z-10 font-[Poppins] text-center px-4">
          Advisory & Institutional Committee
        </h1>
      </div>

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <Section title="Chief Patron" members={committeeData.chiefPatron} />
        <Section title="Patrons" members={committeeData.patrons} />
        <Section title="Advisory Members" members={committeeData.advisoryMembers} />
        <Section title="Management Representatives" members={committeeData.management} />
        <Section title="Leadership Mentors" members={committeeData.mentors} />
        <Section title="Institutional Representatives" members={committeeData.institutional} />
      </section>

      <footer className="bg-[#1a0d0d] text-gray-300 py-6 px-4 sm:px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between space-y-3 md:space-y-0 text-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2 items-center">
            <a href="#contact" className="text-red-500 hover:underline">
              Contact us
            </a>
            <span>|</span>
            <span>
              Copyright © Developed by <span className="text-red-500">RSoft2025</span> All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

