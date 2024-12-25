let dataTable;
let globalData = [];

const ranking1CSV = `#;Username;User;gcd;trucks;ranking;Global;
1;selection2025_1001;Ayxan Dəmirli Natiq;100;100;100;300;
2;selection2025_1004;Həsən Vəliyev Ramil;100;100;100;300;
3;selection2025_1005;Muhammedali Əhmədov Teymur;100;100;50;250;
4;selection2025_1008;Tahir Əliyev Elxan;100;100;50;250;
5;selection2025_1003;Əli Əliyev Yalçın;100;0;100;200;
6;selection2025_1021;Raul Cəfərli Azər;12;100;50;162;
7;selection2025_1015;Əbülfəz Qəhrəmanov Elşad;100;39;20;159;
8;selection2025_1013;Atabəy Rəcəbli Ziya;100;19;20;139;
9;selection2025_1022;Rza Ağayev Ağa;12;100;20;132;
10;selection2025_1023;Turab Haqverdiyev Kərim;0;100;20;120;
11;selection2025_1009;Xanlar İsmayılov Etibar;12;100;0;112;
12;selection2025_1025;Fikrət Əsədzadə Yavər;12;100;0;112;
13;selection2025_1058;Amal Hacıyev Nasir;0;100;0;100;
14;selection2025_1114;Oruc Cabbarlı Şərafətdin;100;0;0;100;
15;selection2025_1020;Rahidil Bayramlı Səbuhi;42;27;20;89;
16;selection2025_1017;Elvin Orucov Məmməd;12;20;50;82;
17;selection2025_1002;Əhməd Qənbərli Faiq;12;39;20;71;
18;selection2025_1016;Elvin İmanlı Aydın;42;7;20;69;
19;selection2025_1039;Elnur Mirzəli Teymur;42;20;0;62;
20;selection2025_1006;Nəsir Bəşirov Bəşir;12;20;20;52;
21;selection2025_1014;Aytən İskəndərova Ramil;12;20;20;52;
22;selection2025_1038;Əli Həsənli Fərrux;12;20;20;52;
23;selection2025_1030;Əliyyiəkbər Şirinli Rafiq;42;7;0;49;
24;selection2025_1007;Ömər Əliməmmədzadə Anar;12;27;0;39;
25;selection2025_1019;Mirrəhim Mirvəlişli Seymur;12;27;0;39;
26;selection2025_1043;Nurəddin Qarayev Fuad;12;27;0;39;
27;selection2025_1046;Uveys Əl-salehi Əhməd əbdülatef qaid;12;27;0;39;
28;selection2025_1010;İsmayıl Məmmədov Əlyəddin;12;20;0;32;
29;selection2025_1024;Uğur İbadzadə Fariz;12;20;0;32;
30;selection2025_1028;Mövlan Əmənov İlkin;12;20;0;32;
31;selection2025_1032;Ayxan Ələkbərov Vüsal;12;20;0;32;
32;selection2025_1034;Emil Əliyev Ceyhun;12;20;0;32;
33;selection2025_1037;Elay Verdiyev Eldəniz;12;20;0;32;
34;selection2025_1040;İsmayıl Quluzadə Ramil;12;20;0;32;
35;selection2025_1045;Turan Eldarov Eldəniz;12;20;0;32;
36;selection2025_1048;Vaqif Seyidzadə İsmayıl;12;20;0;32;
37;selection2025_1052;Əli Süleymanzadə Elşən;12;20;0;32;
38;selection2025_1063;Cavanşir İsmayılzadə Calal;12;20;0;32;
39;selection2025_1107;Rəvan Sadıqov Nadir;12;20;0;32;
40;selection2025_1123;Osman Əhmədzadə;12;20;0;32;
41;selection2025_1080;Hüseyn Əhmədli İlkin;0;27;0;27;
42;selection2025_1033;Əkbər Bağırov Mübariz;0;20;0;20;
43;selection2025_1068;Əkbər Əhmədov İlham;0;20;0;20;
44;selection2025_1076;Fateh Əhmədzadə Ruslan;0;20;0;20;
45;selection2025_1084;Kənan Əfəndi Cavanşir;0;20;0;20;
46;selection2025_1089;Oğuz Həsənli Xalid;0;20;0;20;
47;selection2025_1090;Okan İslam Aqil;0;20;0;20;
48;selection2025_1098;Sübhan Namazlı Rəhman;0;20;0;20;
49;selection2025_1122;Nihat Əliyev;0;20;0;20;
50;selection2025_1027;Mərd Cəfərzadə Vurğun;12;0;0;12;
51;selection2025_1035;Sənan Sadıxov Samir;12;0;0;12;
52;selection2025_1042;Nicat Nəcəfli Rövşən;12;0;0;12;
53;selection2025_1047;Valeh Ağammədov Səfalı;12;0;0;12;
54;selection2025_1056;Ali Əzizli Mayis;12;0;0;12;
55;selection2025_1062;Ayxan Xudaverdiyev Sənan;12;0;0;12;
56;selection2025_1064;Cüneyd Qənbərov Vüqar;12;0;0;12;
57;selection2025_1082;İslam Səfərli İkram;12;0;0;12;
58;selection2025_1094;Qədir Məmmədov Əsəd;12;0;0;12;
59;selection2025_1109;Xədicə Mahmudova Fəzail;12;0;0;12;
60;selection2025_1116;Zakir Bayramov Elçin;12;0;0;12;
61;selection2025_1011;Cəbrayıl Namazlı Səbuhi;0;0;0;0;
62;selection2025_1012;Alim Hacıyev Rizvan;0;0;0;0;
63;selection2025_1018;İbrahim Fətəliyev İlqar;0;0;0;0;
64;selection2025_1026;İlyas Haqverdi Məhəmməd;0;0;0;0;
65;selection2025_1029;Sumuraz Mirzəyev İsrəfil;0;0;0;0;
66;selection2025_1031;Ayan Kərimova Xəyyam;0;0;0;0;
67;selection2025_1036;Cəsur Rəsulzadə Kamran;0;0;0;0;
68;selection2025_1041;Kamal İbrahim Oqtay;0;0;0;0;
69;selection2025_1044;Teymur Rəhimov Qoca;0;0;0;0;
70;selection2025_1049;Nurlan Cabbarlı Müşfiq;0;0;0;0;
71;selection2025_1050;Anar Hasilov Taleh;0;0;0;0;
72;selection2025_1051;Eldar Mustafayev Əflatun;0;0;0;0;
73;selection2025_1053;Elman Mustafayev Rövşən;0;0;0;0;
74;selection2025_1054;Fərid Həmidov Rəfail;0;0;0;0;
75;selection2025_1055;Hüseyn Hüseynli Yalçın;0;0;0;0;
76;selection2025_1057;Alimdar Musayev Cavid;0;0;0;0;
77;selection2025_1059;Amin Məmmədov Ruslan;0;0;0;0;
78;selection2025_1060;Aydın Əliyev İlqar;0;0;0;0;
79;selection2025_1061;Ayşən Məmmədova Zahid;0;0;0;0;
80;selection2025_1065;Dmytro Radzevil Andrey;0;0;0;0;
81;selection2025_1066;Ədalət Əzimli Azər;0;0;0;0;
82;selection2025_1067;Əhməd Dadaşov Nazim;0;0;0;0;
83;selection2025_1069;Əkbər Həbibullayev Namiq;0;0;0;0;
84;selection2025_1070;Əkrəm Məmmədov Orxan;0;0;0;0;
85;selection2025_1071;Əli Hüseynli Nazim;0;0;0;0;
86;selection2025_1072;Əlitayib Məmmədov Tahir;0;0;0;0;
87;selection2025_1073;Elxan Ağakişiyev Yaşar;0;0;0;0;
88;selection2025_1074;Ərhun Abdullazadə Aqşin;0;0;0;0;
89;selection2025_1075;Ərtoğrul Həsənli Emil;0;0;0;0;
90;selection2025_1077;Fərrux Məmmədli Əhməd;0;0;0;0;
91;selection2025_1078;Firuz Murtuzov Fariz;0;0;0;0;
92;selection2025_1079;Hüseyn Cəfərli Məhəmməd;0;0;0;0;
93;selection2025_1081;İsgəndər Yusifov Fərman;0;0;0;0;
94;selection2025_1083;İsmayıl Əhmədli Daşqın;0;0;0;0;
95;selection2025_1085;Məhəmməd Məmmədov Şaiq;0;0;0;0;
96;selection2025_1086;Məhəmməd Axundlu Zaur;0;0;0;0;
97;selection2025_1087;Murad İsmayılzadə Namiq;0;0;0;0;
98;selection2025_1088;Nihat Əliyev Rəşid;0;0;0;0;
99;selection2025_1091;Ömər Musayev Fərid;0;0;0;0;
100;selection2025_1092;Orxan Şahmuradlı Aqşin;0;0;0;0;
101;selection2025_1093;Qaraxan Cəlilsoy Vüqar;0;0;0;0;
102;selection2025_1095;Rəfiqə Qəmbərova Ceyhun;0;0;0;0;
103;selection2025_1096;Rəşid Haşımzadə Ramin;0;0;0;0;
104;selection2025_1097;Səid Abdullazadə Mehdi;0;0;0;0;
105;selection2025_1099;Ülvi Sadıqlı Elşad;0;0;0;0;
106;selection2025_1100;Xədicə Məhərli Əbülfəz;0;0;0;0;
107;selection2025_1101;Yusif Əhmədov Musa;0;0;0;0;
108;selection2025_1102;Yusif Atamoğlanlı Rafael;0;0;0;0;
109;selection2025_1103;Ziya Məmmədov Asəf;0;0;0;0;
110;selection2025_1104;Çingiz Həsənli İlkin;0;0;0;0;
111;selection2025_1105;Leyla Hacızadə Vasif;0;0;0;0;
112;selection2025_1106;Məhəmməd Səttarlı Azər;0;0;0;0;
113;selection2025_1108;Səməndər Vəliyev Ramin;0;0;0;0;
114;selection2025_1110;Amal Musayev Amil;0;0;0;0;
115;selection2025_1111;Elmir Hacızadə Anar;0;0;0;0;
116;selection2025_1112;Hüseyn Tahirov Ramil;0;0;0;0;
117;selection2025_1113;İsmayıl Hacıyev Elşən;0;0;0;0;
118;selection2025_1115;Barış Abbaszadə Daşqın;0;0;0;0;
119;selection2025_1117;Nərgiz Nağı Arif;0;0;0;0;
120;selection2025_1118;Bəxtiyar Nəcəfzadə Elşən;0;0;0;0;
121;selection2025_1125;Abdullah Əliyev;0;0;0;0;
122;selection2025_1121;Nicat Hüseynli;0;0;0;0;
123;selection2025_1124;Qoşqar Ramazanlı;0;0;0;0;`;

const ranking2CSV = `#;Username;User;discount;permutations;password;Global;;
1;selection2025_2004;Ayxan Dəmirli;100;100;100;300;;
2;selection2025_2010;Əli Əliyev;100;100;100;300;;
3;selection2025_2032;Tahir Əliyev;100;100;100;300;;
4;selection2025_2006;Əhməd Qəmbərli;100;100;4;204;;
5;selection2025_2014;Elvin İmanlı;59;11;100;170;;
6;selection2025_2017;Həsən Vəliyev;59;11;100;170;;
7;selection2025_2005;Əbülfəz Qəhrəmanov;59;11;39;109;;
8;selection2025_2013;Elvin Orucov;24;11;39;74;;
9;selection2025_2003;Aytən İskəndərova;59;11;4;74;;
10;selection2025_2015;Fateh Əhmədzadə;59;11;4;74;;
11;selection2025_2016;Fikrət Əsədzadə;59;11;4;74;;
12;selection2025_2022;Nəsir Bəşirov;59;11;4;74;;
13;selection2025_2023;Nurəddin Qarayev;59;11;4;74;;
14;selection2025_2027;Rahidil Bayramlı;59;11;4;74;;
15;selection2025_2030;Rza Ağayev;59;11;4;74;;
16;selection2025_2039;Vaqif Seyidzadə;59;11;4;74;;
17;selection2025_2043;Mövlan Əmənov;59;11;4;74;;
18;selection2025_2047;İsmayıl Məmmədov;59;11;4;74;;
19;selection2025_2034;Uveys Əl-salehi;36;33;4;73;;
20;selection2025_2007;Əkbər Əhmədov;59;11;0;70;;
21;selection2025_2021;Muhammedali Əhmədov;59;11;0;70;;
22;selection2025_2024;Ömər Əliməmmədzadə;59;11;0;70;;
23;selection2025_2028;Raul Cəfərli;59;11;0;70;;
24;selection2025_2044;Əli Suleymanzadə;59;11;0;70;;
25;selection2025_2002;Atabəy Rəcəbli;46;11;4;61;seçmə 1 yüksək nəticə ;
26;selection2025_2020;Mirrəhim Mirvəlişli;46;11;4;61;;
27;selection2025_2056;Ədalət Əzimli;59;0;0;59;aşağı yaş;
28;selection2025_2057;Xədicə Məhərli;59;0;0;59;qız;
29;selection2025_2008;Elay Verdiyev;24;11;4;39;aşağı yaş;
30;selection2025_2011;Əliyyiəkbər Şirinli;24;11;4;39;;
31;selection2025_2026;Osman Əhmədzadə;24;11;4;39;aşağı yaş;
32;selection2025_2035;Xanlar İsmayılov;24;11;4;39;;
33;selection2025_2038;Leyla Hacızadə;24;11;4;39;qız;
34;selection2025_2051;Qədir Məmmədov;24;11;4;39;;
35;selection2025_2040;Emil Əliyev;24;11;0;35;;
36;selection2025_2009;Əli Həsənli;13;11;4;28;;
37;selection2025_2036;Xədicə Mahmudova;13;11;4;28;qız;
38;selection2025_2041;İsmayıl Quluzadə;13;11;4;28;;
39;selection2025_2049;Hüseyn Quliyev;13;11;4;28;;
40;selection2025_2055;Amin Məmmədov;13;11;4;28;;
41;selection2025_2001;Amal Hacıyev;13;11;4;28;;
42;selection2025_2018;Hüseyn Əhmədli;11;11;4;26;;
43;selection2025_2019;Mərd Cəfərzadə;11;11;4;26;;
44;selection2025_2029;Rəvan Sadıqov;13;11;0;24;;
45;selection2025_2046;Cəbrayıl Namazlı;13;11;0;24;;
46;selection2025_2048;Ayxan Xudaverdiyev;13;11;0;24;;
47;selection2025_2058;Bəxtiyar Nəcəfzadə;13;11;0;24;;
48;selection2025_2061;Riyad Qəhrəmanlı;13;11;0;24;;
49;selection2025_2045;Cəsur Rasulzadə;13;0;0;13;;
50;selection2025_2052;Yusif Hidayətzadə;13;0;0;13;;
51;selection2025_2053;Valeh Ağammədov;13;0;0;13;;
52;selection2025_2060;Nurlan Cabbarlı;13;0;0;13;;
53;selection2025_2050;Rəşid Həşimzadə;0;11;0;11;;
54;selection2025_2012;Elnur Mirzəli;0;0;4;4;;
55;selection2025_2042;Nərgiz Nağı;0;0;0;0;;
56;selection2025_2054;İslam Okan;0;0;0;0;;
57;selection2025_2059;Məhəmməd Səttarlı;0;0;0;0;;`;

// Parse CSV and return array of objects
function parseCSV(csvString) {
    const parsed = Papa.parse(csvString, {
        delimiter: ";",
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true // Automatically converts numeric strings to numbers
    });
    return parsed.data;
}

// Clean username function to ensure consistency
function cleanUserName(user) {
    if (!user) return '';
    const parts = user.trim().split(' ');
    if (parts.length >= 2) {
        return parts.slice(0, 2).join(' ');
    }
    return user.trim();
}

// Calculate GP score based on place
function calculateGPScore(place) {
    const points = [100, 75, 55, 40, 30, 25, 20, 15, 10, 5];
    return place <= points.length ? points[place - 1] : 0;
}

// Handle tied scores and calculate GP scores
function handleTiedScores(users, roundKey) {
    const scoreGroups = {};

    users.forEach(user => {
        const score = user.rounds[roundKey];
        if (!scoreGroups[score]) {
            scoreGroups[score] = [];
        }
        scoreGroups[score].push(user);
    });

    let currentPlace = 1;
    Object.keys(scoreGroups)
        .sort((a, b) => b - a)
        .forEach(score => {
            const tiedUsers = scoreGroups[score];
            let sumPoints = 0;

            for (let i = 0; i < tiedUsers.length; i++) {
                const place = currentPlace + i;
                sumPoints += calculateGPScore(place);
            }

            const averagePoints = tiedUsers.length > 0 ? sumPoints / tiedUsers.length : 0;

            tiedUsers.forEach(user => {
                user[`${roundKey} Place`] = currentPlace;
                user[`${roundKey} GP Score`] = parseFloat(averagePoints.toFixed(2));
            });

            currentPlace += tiedUsers.length;
        });
}

// Calculate best 3 scores
function calculateBest3Scores(gpScores) {
    // Since there are only two rounds, sum them directly
    const validScores = gpScores.filter(score => 
        score !== undefined && score !== null && !isNaN(score) && score > 0
    );
    
    const sortedScores = validScores.sort((a, b) => b - a);
    // If less than 3 scores, sum what is available
    return sortedScores.slice(0, 3).reduce((sum, score) => sum + score, 0);
}

// Calculate rankings and trends based on Round 1 and Round 2 GP Scores
function calculateRankingsAndTrends(users) {
    // Sort by Round 1 GP Score for original ranking
    const originalRanking = [...users]
        .sort((a, b) => b['Round 1 GP Score'] - a['Round 1 GP Score'])
        .map(user => user.User);
    
    // Sort by Round 2 GP Score for bonus ranking
    const bonusRanking = [...users]
        .sort((a, b) => b['Round 2 GP Score'] - a['Round 2 GP Score'])
        .map(user => user.User);
    
    users.forEach(user => {
        const originalRank = originalRanking.indexOf(user.User) + 1;
        const bonusRank = bonusRanking.indexOf(user.User) + 1;
        
        // Set default values if not found
        user.originalRank = originalRank > 0 ? originalRank : 'N/A';
        user.bonusRank = bonusRank > 0 ? bonusRank : 'N/A';
        
        // Calculate ranking difference
        let rankDiff = 0;
        if (user.originalRank !== 'N/A' && user.bonusRank !== 'N/A') {
            rankDiff = user.originalRank - user.bonusRank;
        }

        if (rankDiff > 0) {
            user.trend = 'improved';
        } else if (rankDiff < 0) {
            user.trend = 'declined';
        } else {
            user.trend = 'stable';
        }
    });
}

// Calculate final scores for users based on Round 1 and Round 2 GP Scores
function calculateFinalScores(users) {
    users.forEach(user => {
        // Ensure Round GP Scores are numbers
        const round1Score = parseFloat(user['Round 1 GP Score']) || 0;
        const round2Score = parseFloat(user['Round 2 GP Score']) || 0;

        // Calculate Total Score
        user['Total Score'] = round1Score + round2Score;
        
        // Calculate Best 3 scores
        const gpScores = [round1Score, round2Score];
        user['Best 3 Scores'] = parseFloat(calculateBest3Scores(gpScores).toFixed(2));
        
        // Calculate Bonus Points (20% of Best 3 Scores)
        user['Bonus Points'] = parseFloat((user['Best 3 Scores'] * 0.2).toFixed(2));
    });
}

// Get trend indicator HTML
function getTrendIndicator(user) {
    const trendConfig = {
        improved: {
            icon: 'arrow-up',
            class: 'bg-success',
            text: 'Improved'
        },
        declined: {
            icon: 'arrow-down',
            class: 'bg-warning',
            text: 'Declined'
        },
        stable: {
            icon: 'equals',
            class: 'bg-info',
            text: 'Stable'
        }
    };

    const config = trendConfig[user.trend] || trendConfig['stable'];
    return `
        <span class="badge ${config.class}" 
            title="Original rank: ${user.originalRank}, Bonus rank: ${user.bonusRank}">
            <i class="fas fa-${config.icon}"></i> 
            ${config.text}
        </span>`;
}

// Show user details in modal
function showUserDetails(userData) {
    // Update modal title
    document.getElementById('modalUserName').textContent = userData.User;
    
    // Update progress bars
    const round1Progress = (userData['Round 1 GP Score'] / 100) * 100;
    const round2Progress = (userData['Round 2 GP Score'] / 100) * 100;
    
    $('.round1-progress')
        .css('width', `${round1Progress}%`)
        .attr('aria-valuenow', round1Progress)
        .removeClass('bg-success bg-warning bg-danger')
        .addClass(getProgressBarClass(round1Progress));
        
    $('.round2-progress')
        .css('width', `${round2Progress}%`)
        .attr('aria-valuenow', round2Progress)
        .removeClass('bg-success bg-warning bg-danger')
        .addClass(getProgressBarClass(round2Progress));
    
    // Update scores
    $('#round1Place').text(userData['Round 1 Place'] || 'N/A');
    $('#round1Score').text(userData['Round 1 GP Score'] ? userData['Round 1 GP Score'].toFixed(2) : '0.00');
    $('#round2Place').text(userData['Round 2 Place'] || 'N/A');
    $('#round2Score').text(userData['Round 2 GP Score'] ? userData['Round 2 GP Score'].toFixed(2) : '0.00');
    
    // Update statistics
    $('#modalTotalScore').text(userData['Total Score'].toFixed(2));
    $('#modalBestScores').text(userData['Best 3 Scores'].toFixed(2));
    $('#modalBonusPoints').text(userData['Bonus Points'].toFixed(2));
    
    // Update ranking analysis
    $('#rankingAnalysis').html(generateRankingAnalysis(userData));
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('userDetailsModal'));
    modal.show();
}

// Generate ranking analysis HTML
function generateRankingAnalysis(userData) {
    const rankChange = userData.originalRank !== 'N/A' && userData.bonusRank !== 'N/A' ? (userData.originalRank - userData.bonusRank) : 0;
    let analysisHtml = '<div class="analysis-content">';
    
    if (rankChange > 0) {
        analysisHtml += `
            <div class="alert alert-success">
                <i class="fas fa-arrow-up me-2"></i>
                Ranking improved by ${rankChange} position(s)
                (from ${userData.originalRank} to ${userData.bonusRank})
            </div>`;
    } else if (rankChange < 0) {
        analysisHtml += `
            <div class="alert alert-warning">
                <i class="fas fa-arrow-down me-2"></i>
                Ranking dropped by ${Math.abs(rankChange)} position(s)
                (from ${userData.originalRank} to ${userData.bonusRank})
            </div>`;
    } else {
        analysisHtml += `
            <div class="alert alert-info">
                <i class="fas fa-equals me-2"></i>
                Maintained ranking position at ${userData.originalRank}
            </div>`;
    }
    
    return analysisHtml + '</div>';
}

// Get progress bar class based on score
function getProgressBarClass(score) {
    if (score >= 75) return 'bg-success';
    if (score >= 40) return 'bg-warning';
    return 'bg-danger';
}

// Update summary statistics based on Total Score
function updateSummaryStats(users) {
    $('#totalParticipants').text(users.length);
    $('#topScore').text(Math.max(...users.map(u => u['Total Score'])).toFixed(2));
    $('#avgScore').text((users.reduce((sum, u) => sum + u['Total Score'], 0) / users.length).toFixed(2));
    $('#perfectScores').text(users.filter(u => u['Total Score'] >= 200).length); // Adjusted threshold based on two rounds
}

// Initialize DataTable without Final Score
function initializeDataTable(users) {
    return $('#scoresTable').DataTable({
        data: users,
        columns: [
            { 
                data: 'User',
                title: 'Participant',
                render: function(data, type, row) {
                    return `<div class="user-cell">${data}</div>`;
                }
            },
            { data: 'Round 1 Place', title: 'R1 Place' },
            { data: 'Round 2 Place', title: 'R2 Place' },
            { 
                data: 'Round 1 GP Score',
                title: 'GP1 Score',
                render: function(data) {
                    return data !== undefined && data !== null ? parseFloat(data).toFixed(2) : '0.00';
                }
            },
            { 
                data: 'Round 2 GP Score',
                title: 'GP2 Score',
                render: function(data) {
                    return data !== undefined && data !== null ? parseFloat(data).toFixed(2) : '0.00';
                }
            },
            { 
                data: 'Total Score',
                title: 'Total',
                render: function(data) {
                    return data !== undefined && data !== null ? parseFloat(data).toFixed(2) : '0.00';
                }
            },
            { 
                data: 'Best 3 Scores',
                title: 'Best 3',
                render: function(data) {
                    return data !== undefined && data !== null ? parseFloat(data).toFixed(2) : '0.00';
                }
            },
            { 
                data: 'Bonus Points',
                title: 'Bonus',
                render: function(data) {
                    return data !== undefined && data !== null ? parseFloat(data).toFixed(2) : '0.00';
                }
            },
            { 
                data: 'trend',
                title: 'Trend',
                render: function(data, type, row) {
                    return getTrendIndicator(row);
                }
            },
            {
                data: null,
                title: 'Details',
                orderable: false,
                render: function(data, type, row) {
                    // Escape single quotes to prevent breaking the onclick attribute
                    const rowData = JSON.stringify(row).replace(/'/g, "\\'");
                    return `<button class="btn btn-sm btn-info" onclick='showUserDetails(${rowData})'>
                        <i class="fas fa-info-circle"></i>
                    </button>`;
                }
            }
        ],
        order: [[5, 'desc']], // Order by Total Score descending
        pageLength: 10,
        responsive: true,
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search participants..."
        },
        initComplete: function() {
            setupCustomFilters();
        }
    });
}

// Setup custom filters
function setupCustomFilters() {
    // Clear existing search handlers
    $.fn.dataTable.ext.search.pop();
    
    // Add combined filter handler
    $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
        const row = globalData[dataIndex];
        
        // Round filter
        const roundFilter = $('#roundFilter').val();
        if (roundFilter === '1' && row['Round 1 GP Score'] === 0) return false;
        if (roundFilter === '2' && row['Round 2 GP Score'] === 0) return false;
        
        // Score filter
        const scoreFilter = $('#scoreFilter').val();
        const totalScore = row['Total Score'];
        if (scoreFilter === 'high' && totalScore <= 150) return false; // Adjusted threshold based on two rounds (max 200)
        if (scoreFilter === 'medium' && (totalScore <= 100 || totalScore > 150)) return false;
        if (scoreFilter === 'low' && totalScore > 100) return false;
        
        // Performance filter
        const perfFilter = $('#performanceFilter').val();
        if (perfFilter && perfFilter !== row.trend) return false;
        
        return true;
    });
    
    // Add event listeners
    $('#roundFilter, #scoreFilter, #performanceFilter').on('change', function() {
        dataTable.draw();
    });
    
    $('#quickSearch').on('keyup', function() {
        dataTable.search(this.value).draw();
    });
}

// Main initialization function
async function main() {
    try {
        // Parse CSV data
        const data1 = parseCSV(ranking1CSV);
        const data2 = parseCSV(ranking2CSV);
        
        // Process and merge data
        const usersMap = {};
        
        // Process Round 1
        data1.forEach(entry => {
            const userNameClean = cleanUserName(entry.User);
            if (!usersMap[userNameClean]) {
                usersMap[userNameClean] = {
                    User: userNameClean,
                    rounds: {
                        'Round 1': parseFloat(entry.Global) || 0,
                        'Round 2': 0
                    }
                };
            } else {
                usersMap[userNameClean].rounds['Round 1'] = parseFloat(entry.Global) || 0;
            }
        });
        
        // Process Round 2
        data2.forEach(entry => {
            const userNameClean = cleanUserName(entry.User);
            if (!usersMap[userNameClean]) {
                usersMap[userNameClean] = {
                    User: userNameClean,
                    rounds: {
                        'Round 1': 0,
                        'Round 2': parseFloat(entry.Global) || 0
                    }
                };
            } else {
                usersMap[userNameClean].rounds['Round 2'] = parseFloat(entry.Global) || 0;
            }
        });
        
        // Convert to array and process
        const users = Object.values(usersMap);
        
        // Calculate scores and rankings
        handleTiedScores(users, 'Round 1');
        handleTiedScores(users, 'Round 2');
        calculateFinalScores(users);
        calculateRankingsAndTrends(users);
        
        // Sort by Total Score descending
        users.sort((a, b) => b['Total Score'] - a['Total Score']);
        
        // Store processed data globally
        globalData = users;
        
        // Initialize table and update stats
        dataTable = initializeDataTable(users);
        updateSummaryStats(users);
        
    } catch (error) {
        console.error('Error initializing data:', error);
        alert('Error loading data. Please try again.');
    }
}

$(document).ready(function() {
    main();
});