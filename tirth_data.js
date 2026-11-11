/**
 * યાત્રા આયોજક - તીર્થસ્થાન ડેટાબેઝ ફાઈલ (tirth_data.js)
 * 
 * નોંધ:
 * 1. "image" માં તમે તમારા GitHub ના "images/" ફોલ્ડરનો પાથ (દા.ત. "images/ayodhya.jpg") 
 *    અથવા કોઈપણ ઓનલાઇન ફોટો URL મૂકી શકો છો.
 * 2. જો કોઈ તીર્થનો ફોટો ન મૂકવો હોય તો image: "" (ખાલી) રાખી શકો છો.
 */

// ૧. મુખ્ય તીર્થસ્થાનોનું લિસ્ટ (કક્કાવારી પ્રમાણે)
window.TIRTH_MASTER_LIST = [
  { name: "અયોધ્યા", image: "images/ayodhya.jpg" },
  { name: "ઋષિકેશ", image: "images/rishikesh.jpg" },
  { name: "કાઠમંડુ", image: "images/kathmandu.jpg" },
  { name: "કાશી", image: "images/kashi.jpg" },
  { name: "કેદારનાથ", image: "images/kedarnath.jpg" },
  { name: "ખાણ ગામ", image: "images/khangam.jpg" },
  { name: "ગંગોત્રી", image: "images/gangotri.jpg" },
  { name: "ગોકુળ", image: "images/gokul.jpg" },
  { name: "ચિત્રકૂટ", image: "images/chitrakoot.jpg" },
  { name: "છપૈયા", image: "images/chhapaiya.jpg" },
  { name: "જગન્નાથપુરી", image: "images/jagannathpuri.jpg" },
  { name: "દ્વારકા", image: "images/dwarka.jpg" },
  { name: "નાથદ્વારા", image: "images/nathdwara.jpg" },
  { name: "નૈમિષારણ્ય", image: "images/naimisharanya.jpg" },
  { name: "પુષ્કર", image: "images/pushkar.jpg" },
  { name: "પોખરા", image: "images/pokhara.jpg" },
  { name: "પ્રયાગરાજ", image: "images/prayagraj.jpg" },
  { name: "બદ્રીનાથ", image: "images/badrinath.jpg" },
  { name: "મથુરા", image: "images/mathura.jpg" },
  { name: "યમુનોત્રી", image: "images/yamunotri.jpg" },
  { name: "રામેશ્વરમ", image: "images/rameswaram.jpg" },
  { name: "વૃંદાવન", image: "images/vrindavan.jpg" },
  { name: "હરિદ્વાર", image: "images/haridwar.jpg" }
];

// ૨. યુઝરે ઉમેરેલા નવા તીર્થસ્થાનોનું અલગ લિસ્ટ
window.USER_ADDED_TIRTH_LIST = [
  // જ્યારે કોઈ યુઝર નવું તીર્થસ્થાન ઉમેરશે ત્યારે તે અહીં અલગ લિસ્ટમાં સેવ થશે.
  // ઉદાહરણ તરીકે:
  // { name: "નીલકંઠ ધામ (પોઈચા)", image: "images/poicha.jpg" }
];
