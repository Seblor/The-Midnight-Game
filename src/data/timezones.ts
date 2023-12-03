import { getTimeZoneOffsetOfLocale } from "../utils/time";

const supportedTimezones = Intl.supportedValuesOf('timeZone');

export const timzeones: {
  "countryCode": string;
  "countryName": string;
  "timeZone": string;
  "GMTOffset": string;
}[] = [
    {
      "countryCode": "AF",
      "countryName": "Afghanistan",
      "timeZone": "Asia/Kabul",
    },
    {
      "countryCode": "AL",
      "countryName": "Albania",
      "timeZone": "Europe/Tirane",
    },
    {
      "countryCode": "DZ",
      "countryName": "Algeria",
      "timeZone": "Africa/Algiers",
    },
    {
      "countryCode": "AS",
      "countryName": "American Samoa",
      "timeZone": "Pacific/Pago_Pago",
    },
    {
      "countryCode": "AD",
      "countryName": "Andorra",
      "timeZone": "Europe/Andorra",
    },
    {
      "countryCode": "AO",
      "countryName": "Angola",
      "timeZone": "Africa/Luanda",
    },
    {
      "countryCode": "AI",
      "countryName": "Anguilla",
      "timeZone": "America/Anguilla",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/Casey",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/Davis",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/DumontDUrville",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/Mawson",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/McMurdo",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/Palmer",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/Rothera",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/Syowa",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/Troll",
    },
    {
      "countryCode": "AQ",
      "countryName": "Antarctica",
      "timeZone": "Antarctica/Vostok",
    },
    {
      "countryCode": "AG",
      "countryName": "Antigua and Barbuda",
      "timeZone": "America/Antigua",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/Buenos_Aires",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/Catamarca",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/Cordoba",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/Jujuy",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/La_Rioja",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/Mendoza",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/Rio_Gallegos",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/Salta",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/San_Juan",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/San_Luis",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/Tucuman",
    },
    {
      "countryCode": "AR",
      "countryName": "Argentina",
      "timeZone": "America/Argentina/Ushuaia",
    },
    {
      "countryCode": "AM",
      "countryName": "Armenia",
      "timeZone": "Asia/Yerevan",
    },
    {
      "countryCode": "AW",
      "countryName": "Aruba",
      "timeZone": "America/Aruba",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Antarctica/Macquarie",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Adelaide",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Brisbane",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Broken_Hill",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Darwin",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Eucla",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Hobart",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Lindeman",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Lord_Howe",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Melbourne",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Perth",
    },
    {
      "countryCode": "AU",
      "countryName": "Australia",
      "timeZone": "Australia/Sydney",
    },
    {
      "countryCode": "AT",
      "countryName": "Austria",
      "timeZone": "Europe/Vienna",
    },
    {
      "countryCode": "AZ",
      "countryName": "Azerbaijan",
      "timeZone": "Asia/Baku",
    },
    {
      "countryCode": "BS",
      "countryName": "Bahamas",
      "timeZone": "America/Nassau",
    },
    {
      "countryCode": "BH",
      "countryName": "Bahrain",
      "timeZone": "Asia/Bahrain",
    },
    {
      "countryCode": "BD",
      "countryName": "Bangladesh",
      "timeZone": "Asia/Dhaka",
    },
    {
      "countryCode": "BB",
      "countryName": "Barbados",
      "timeZone": "America/Barbados",
    },
    {
      "countryCode": "BY",
      "countryName": "Belarus",
      "timeZone": "Europe/Minsk",
    },
    {
      "countryCode": "BE",
      "countryName": "Belgium",
      "timeZone": "Europe/Brussels",
    },
    {
      "countryCode": "BZ",
      "countryName": "Belize",
      "timeZone": "America/Belize",
    },
    {
      "countryCode": "BJ",
      "countryName": "Benin",
      "timeZone": "Africa/Porto-Novo",
    },
    {
      "countryCode": "BM",
      "countryName": "Bermuda",
      "timeZone": "Atlantic/Bermuda",
    },
    {
      "countryCode": "BT",
      "countryName": "Bhutan",
      "timeZone": "Asia/Thimphu",
    },
    {
      "countryCode": "BO",
      "countryName": "Bolivia, Plurinational State of",
      "timeZone": "America/La_Paz",
    },
    {
      "countryCode": "BQ",
      "countryName": "Bonaire, Sint Eustatius and Saba",
      "timeZone": "America/Kralendijk",
    },
    {
      "countryCode": "BA",
      "countryName": "Bosnia and Herzegovina",
      "timeZone": "Europe/Sarajevo",
    },
    {
      "countryCode": "BW",
      "countryName": "Botswana",
      "timeZone": "Africa/Gaborone",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Araguaina",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Bahia",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Belem",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Boa_Vista",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Campo_Grande",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Cuiaba",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Eirunepe",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Fortaleza",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Maceio",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Manaus",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Noronha",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Porto_Velho",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Recife",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Rio_Branco",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Santarem",
    },
    {
      "countryCode": "BR",
      "countryName": "Brazil",
      "timeZone": "America/Sao_Paulo",
    },
    {
      "countryCode": "IO",
      "countryName": "British Indian Ocean Territory",
      "timeZone": "Indian/Chagos",
    },
    {
      "countryCode": "BN",
      "countryName": "Brunei Darussalam",
      "timeZone": "Asia/Brunei",
    },
    {
      "countryCode": "BG",
      "countryName": "Bulgaria",
      "timeZone": "Europe/Sofia",
    },
    {
      "countryCode": "BF",
      "countryName": "Burkina Faso",
      "timeZone": "Africa/Ouagadougou",
    },
    {
      "countryCode": "BI",
      "countryName": "Burundi",
      "timeZone": "Africa/Bujumbura",
    },
    {
      "countryCode": "KH",
      "countryName": "Cambodia",
      "timeZone": "Asia/Phnom_Penh",
    },
    {
      "countryCode": "CM",
      "countryName": "Cameroon",
      "timeZone": "Africa/Douala",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Atikokan",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Blanc-Sablon",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Cambridge_Bay",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Creston",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Dawson",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Dawson_Creek",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Edmonton",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Fort_Nelson",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Glace_Bay",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Goose_Bay",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Halifax",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Inuvik",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Iqaluit",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Moncton",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Rankin_Inlet",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Regina",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Resolute",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/St_Johns",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Swift_Current",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Toronto",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Vancouver",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Whitehorse",
    },
    {
      "countryCode": "CA",
      "countryName": "Canada",
      "timeZone": "America/Winnipeg",
    },
    {
      "countryCode": "CV",
      "countryName": "Cape Verde",
      "timeZone": "Atlantic/Cape_Verde",
    },
    {
      "countryCode": "KY",
      "countryName": "Cayman Islands",
      "timeZone": "America/Cayman",
    },
    {
      "countryCode": "CF",
      "countryName": "Central African Republic",
      "timeZone": "Africa/Bangui",
    },
    {
      "countryCode": "TD",
      "countryName": "Chad",
      "timeZone": "Africa/Ndjamena",
    },
    {
      "countryCode": "CL",
      "countryName": "Chile",
      "timeZone": "America/Punta_Arenas",
    },
    {
      "countryCode": "CL",
      "countryName": "Chile",
      "timeZone": "America/Santiago",
    },
    {
      "countryCode": "CL",
      "countryName": "Chile",
      "timeZone": "Pacific/Easter",
    },
    {
      "countryCode": "CN",
      "countryName": "China",
      "timeZone": "Asia/Shanghai",
    },
    {
      "countryCode": "CN",
      "countryName": "China",
      "timeZone": "Asia/Urumqi",
    },
    {
      "countryCode": "CX",
      "countryName": "Christmas Island",
      "timeZone": "Indian/Christmas",
    },
    {
      "countryCode": "CC",
      "countryName": "Cocos (Keeling) Islands",
      "timeZone": "Indian/Cocos",
    },
    {
      "countryCode": "CO",
      "countryName": "Colombia",
      "timeZone": "America/Bogota",
    },
    {
      "countryCode": "KM",
      "countryName": "Comoros",
      "timeZone": "Indian/Comoro",
    },
    {
      "countryCode": "CG",
      "countryName": "Congo",
      "timeZone": "Africa/Brazzaville",
    },
    {
      "countryCode": "CD",
      "countryName": "Congo, the Democratic Republic of the",
      "timeZone": "Africa/Kinshasa",
    },
    {
      "countryCode": "CD",
      "countryName": "Congo, the Democratic Republic of the",
      "timeZone": "Africa/Lubumbashi",
    },
    {
      "countryCode": "CK",
      "countryName": "Cook Islands",
      "timeZone": "Pacific/Rarotonga",
    },
    {
      "countryCode": "CR",
      "countryName": "Costa Rica",
      "timeZone": "America/Costa_Rica",
    },
    {
      "countryCode": "HR",
      "countryName": "Croatia",
      "timeZone": "Europe/Zagreb",
    },
    {
      "countryCode": "CU",
      "countryName": "Cuba",
      "timeZone": "America/Havana",
    },
    {
      "countryCode": "CW",
      "countryName": "Curaçao",
      "timeZone": "America/Curacao",
    },
    {
      "countryCode": "CY",
      "countryName": "Cyprus",
      "timeZone": "Asia/Famagusta",
    },
    {
      "countryCode": "CY",
      "countryName": "Cyprus",
      "timeZone": "Asia/Nicosia",
    },
    {
      "countryCode": "CZ",
      "countryName": "Czech Republic",
      "timeZone": "Europe/Prague",
    },
    {
      "countryCode": "CI",
      "countryName": "Côte d'Ivoire",
      "timeZone": "Africa/Abidjan",
    },
    {
      "countryCode": "DK",
      "countryName": "Denmark",
      "timeZone": "Europe/Copenhagen",
    },
    {
      "countryCode": "DJ",
      "countryName": "Djibouti",
      "timeZone": "Africa/Djibouti",
    },
    {
      "countryCode": "DM",
      "countryName": "Dominica",
      "timeZone": "America/Dominica",
    },
    {
      "countryCode": "DO",
      "countryName": "Dominican Republic",
      "timeZone": "America/Santo_Domingo",
    },
    {
      "countryCode": "EC",
      "countryName": "Ecuador",
      "timeZone": "America/Guayaquil",
    },
    {
      "countryCode": "EC",
      "countryName": "Ecuador",
      "timeZone": "Pacific/Galapagos",
    },
    {
      "countryCode": "EG",
      "countryName": "Egypt",
      "timeZone": "Africa/Cairo",
    },
    {
      "countryCode": "SV",
      "countryName": "El Salvador",
      "timeZone": "America/El_Salvador",
    },
    {
      "countryCode": "GQ",
      "countryName": "Equatorial Guinea",
      "timeZone": "Africa/Malabo",
    },
    {
      "countryCode": "ER",
      "countryName": "Eritrea",
      "timeZone": "Africa/Asmara",
    },
    {
      "countryCode": "EE",
      "countryName": "Estonia",
      "timeZone": "Europe/Tallinn",
    },
    {
      "countryCode": "ET",
      "countryName": "Ethiopia",
      "timeZone": "Africa/Addis_Ababa",
    },
    {
      "countryCode": "FK",
      "countryName": "Falkland Islands (Malvinas)",
      "timeZone": "Atlantic/Stanley",
    },
    {
      "countryCode": "FO",
      "countryName": "Faroe Islands",
      "timeZone": "Atlantic/Faroe",
    },
    {
      "countryCode": "FJ",
      "countryName": "Fiji",
      "timeZone": "Pacific/Fiji",
    },
    {
      "countryCode": "FI",
      "countryName": "Finland",
      "timeZone": "Europe/Helsinki",
    },
    {
      "countryCode": "FR",
      "countryName": "France",
      "timeZone": "Europe/Paris",
    },
    {
      "countryCode": "GF",
      "countryName": "French Guiana",
      "timeZone": "America/Cayenne",
    },
    {
      "countryCode": "PF",
      "countryName": "French Polynesia",
      "timeZone": "Pacific/Gambier",
    },
    {
      "countryCode": "PF",
      "countryName": "French Polynesia",
      "timeZone": "Pacific/Marquesas",
    },
    {
      "countryCode": "PF",
      "countryName": "French Polynesia",
      "timeZone": "Pacific/Tahiti",
    },
    {
      "countryCode": "TF",
      "countryName": "French Southern Territories",
      "timeZone": "Indian/Kerguelen",
    },
    {
      "countryCode": "GA",
      "countryName": "Gabon",
      "timeZone": "Africa/Libreville",
    },
    {
      "countryCode": "GM",
      "countryName": "Gambia",
      "timeZone": "Africa/Banjul",
    },
    {
      "countryCode": "GE",
      "countryName": "Georgia",
      "timeZone": "Asia/Tbilisi",
    },
    {
      "countryCode": "DE",
      "countryName": "Germany",
      "timeZone": "Europe/Berlin",
    },
    {
      "countryCode": "DE",
      "countryName": "Germany",
      "timeZone": "Europe/Busingen",
    },
    {
      "countryCode": "GH",
      "countryName": "Ghana",
      "timeZone": "Africa/Accra",
    },
    {
      "countryCode": "GI",
      "countryName": "Gibraltar",
      "timeZone": "Europe/Gibraltar",
    },
    {
      "countryCode": "GR",
      "countryName": "Greece",
      "timeZone": "Europe/Athens",
    },
    {
      "countryCode": "GL",
      "countryName": "Greenland",
      "timeZone": "America/Danmarkshavn",
    },
    {
      "countryCode": "GL",
      "countryName": "Greenland",
      "timeZone": "America/Nuuk",
    },
    {
      "countryCode": "GL",
      "countryName": "Greenland",
      "timeZone": "America/Scoresbysund",
    },
    {
      "countryCode": "GL",
      "countryName": "Greenland",
      "timeZone": "America/Thule",
    },
    {
      "countryCode": "GD",
      "countryName": "Grenada",
      "timeZone": "America/Grenada",
    },
    {
      "countryCode": "GP",
      "countryName": "Guadeloupe",
      "timeZone": "America/Guadeloupe",
    },
    {
      "countryCode": "GU",
      "countryName": "Guam",
      "timeZone": "Pacific/Guam",
    },
    {
      "countryCode": "GT",
      "countryName": "Guatemala",
      "timeZone": "America/Guatemala",
    },
    {
      "countryCode": "GG",
      "countryName": "Guernsey",
      "timeZone": "Europe/Guernsey",
    },
    {
      "countryCode": "GN",
      "countryName": "Guinea",
      "timeZone": "Africa/Conakry",
    },
    {
      "countryCode": "GW",
      "countryName": "Guinea-Bissau",
      "timeZone": "Africa/Bissau",
    },
    {
      "countryCode": "GY",
      "countryName": "Guyana",
      "timeZone": "America/Guyana",
    },
    {
      "countryCode": "HT",
      "countryName": "Haiti",
      "timeZone": "America/Port-au-Prince",
    },
    {
      "countryCode": "VA",
      "countryName": "Holy See (Vatican City State)",
      "timeZone": "Europe/Vatican",
    },
    {
      "countryCode": "HN",
      "countryName": "Honduras",
      "timeZone": "America/Tegucigalpa",
    },
    {
      "countryCode": "HK",
      "countryName": "Hong Kong",
      "timeZone": "Asia/Hong_Kong",
    },
    {
      "countryCode": "HU",
      "countryName": "Hungary",
      "timeZone": "Europe/Budapest",
    },
    {
      "countryCode": "IS",
      "countryName": "Iceland",
      "timeZone": "Atlantic/Reykjavik",
    },
    {
      "countryCode": "IN",
      "countryName": "India",
      "timeZone": "Asia/Kolkata",
    },
    {
      "countryCode": "ID",
      "countryName": "Indonesia",
      "timeZone": "Asia/Jakarta",
    },
    {
      "countryCode": "ID",
      "countryName": "Indonesia",
      "timeZone": "Asia/Jayapura",
    },
    {
      "countryCode": "ID",
      "countryName": "Indonesia",
      "timeZone": "Asia/Makassar",
    },
    {
      "countryCode": "ID",
      "countryName": "Indonesia",
      "timeZone": "Asia/Pontianak",
    },
    {
      "countryCode": "IR",
      "countryName": "Iran, Islamic Republic of",
      "timeZone": "Asia/Tehran",
    },
    {
      "countryCode": "IQ",
      "countryName": "Iraq",
      "timeZone": "Asia/Baghdad",
    },
    {
      "countryCode": "IE",
      "countryName": "Ireland",
      "timeZone": "Europe/Dublin",
    },
    {
      "countryCode": "IM",
      "countryName": "Isle of Man",
      "timeZone": "Europe/Isle_of_Man",
    },
    {
      "countryCode": "IL",
      "countryName": "Israel",
      "timeZone": "Asia/Jerusalem",
    },
    {
      "countryCode": "IT",
      "countryName": "Italy",
      "timeZone": "Europe/Rome",
    },
    {
      "countryCode": "JM",
      "countryName": "Jamaica",
      "timeZone": "America/Jamaica",
    },
    {
      "countryCode": "JP",
      "countryName": "Japan",
      "timeZone": "Asia/Tokyo",
    },
    {
      "countryCode": "JE",
      "countryName": "Jersey",
      "timeZone": "Europe/Jersey",
    },
    {
      "countryCode": "JO",
      "countryName": "Jordan",
      "timeZone": "Asia/Amman",
    },
    {
      "countryCode": "KZ",
      "countryName": "Kazakhstan",
      "timeZone": "Asia/Almaty",
    },
    {
      "countryCode": "KZ",
      "countryName": "Kazakhstan",
      "timeZone": "Asia/Aqtau",
    },
    {
      "countryCode": "KZ",
      "countryName": "Kazakhstan",
      "timeZone": "Asia/Aqtobe",
    },
    {
      "countryCode": "KZ",
      "countryName": "Kazakhstan",
      "timeZone": "Asia/Atyrau",
    },
    {
      "countryCode": "KZ",
      "countryName": "Kazakhstan",
      "timeZone": "Asia/Oral",
    },
    {
      "countryCode": "KZ",
      "countryName": "Kazakhstan",
      "timeZone": "Asia/Qostanay",
    },
    {
      "countryCode": "KZ",
      "countryName": "Kazakhstan",
      "timeZone": "Asia/Qyzylorda",
    },
    {
      "countryCode": "KE",
      "countryName": "Kenya",
      "timeZone": "Africa/Nairobi",
    },
    {
      "countryCode": "KI",
      "countryName": "Kiribati",
      "timeZone": "Pacific/Kanton",
    },
    {
      "countryCode": "KI",
      "countryName": "Kiribati",
      "timeZone": "Pacific/Kiritimati",
    },
    {
      "countryCode": "KI",
      "countryName": "Kiribati",
      "timeZone": "Pacific/Tarawa",
    },
    {
      "countryCode": "KP",
      "countryName": "Korea, Democratic People's Republic of",
      "timeZone": "Asia/Pyongyang",
    },
    {
      "countryCode": "KR",
      "countryName": "Korea, Republic of",
      "timeZone": "Asia/Seoul",
    },
    {
      "countryCode": "KW",
      "countryName": "Kuwait",
      "timeZone": "Asia/Kuwait",
    },
    {
      "countryCode": "KG",
      "countryName": "Kyrgyzstan",
      "timeZone": "Asia/Bishkek",
    },
    {
      "countryCode": "LA",
      "countryName": "Lao People's Democratic Republic",
      "timeZone": "Asia/Vientiane",
    },
    {
      "countryCode": "LV",
      "countryName": "Latvia",
      "timeZone": "Europe/Riga",
    },
    {
      "countryCode": "LB",
      "countryName": "Lebanon",
      "timeZone": "Asia/Beirut",
    },
    {
      "countryCode": "LS",
      "countryName": "Lesotho",
      "timeZone": "Africa/Maseru",
    },
    {
      "countryCode": "LR",
      "countryName": "Liberia",
      "timeZone": "Africa/Monrovia",
    },
    {
      "countryCode": "LY",
      "countryName": "Libya",
      "timeZone": "Africa/Tripoli",
    },
    {
      "countryCode": "LI",
      "countryName": "Liechtenstein",
      "timeZone": "Europe/Vaduz",
    },
    {
      "countryCode": "LT",
      "countryName": "Lithuania",
      "timeZone": "Europe/Vilnius",
    },
    {
      "countryCode": "LU",
      "countryName": "Luxembourg",
      "timeZone": "Europe/Luxembourg",
    },
    {
      "countryCode": "MO",
      "countryName": "Macao",
      "timeZone": "Asia/Macau",
    },
    {
      "countryCode": "MK",
      "countryName": "Macedonia, the Former Yugoslav Republic of",
      "timeZone": "Europe/Skopje",
    },
    {
      "countryCode": "MG",
      "countryName": "Madagascar",
      "timeZone": "Indian/Antananarivo",
    },
    {
      "countryCode": "MW",
      "countryName": "Malawi",
      "timeZone": "Africa/Blantyre",
    },
    {
      "countryCode": "MY",
      "countryName": "Malaysia",
      "timeZone": "Asia/Kuala_Lumpur",
    },
    {
      "countryCode": "MY",
      "countryName": "Malaysia",
      "timeZone": "Asia/Kuching",
    },
    {
      "countryCode": "MV",
      "countryName": "Maldives",
      "timeZone": "Indian/Maldives",
    },
    {
      "countryCode": "ML",
      "countryName": "Mali",
      "timeZone": "Africa/Bamako",
    },
    {
      "countryCode": "MT",
      "countryName": "Malta",
      "timeZone": "Europe/Malta",
    },
    {
      "countryCode": "MH",
      "countryName": "Marshall Islands",
      "timeZone": "Pacific/Kwajalein",
    },
    {
      "countryCode": "MH",
      "countryName": "Marshall Islands",
      "timeZone": "Pacific/Majuro",
    },
    {
      "countryCode": "MQ",
      "countryName": "Martinique",
      "timeZone": "America/Martinique",
    },
    {
      "countryCode": "MR",
      "countryName": "Mauritania",
      "timeZone": "Africa/Nouakchott",
    },
    {
      "countryCode": "MU",
      "countryName": "Mauritius",
      "timeZone": "Indian/Mauritius",
    },
    {
      "countryCode": "YT",
      "countryName": "Mayotte",
      "timeZone": "Indian/Mayotte",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Bahia_Banderas",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Cancun",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Chihuahua",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Ciudad_Juarez",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Hermosillo",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Matamoros",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Mazatlan",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Merida",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Mexico_City",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Monterrey",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Ojinaga",
    },
    {
      "countryCode": "MX",
      "countryName": "Mexico",
      "timeZone": "America/Tijuana",
    },
    {
      "countryCode": "FM",
      "countryName": "Micronesia, Federated States of",
      "timeZone": "Pacific/Chuuk",
    },
    {
      "countryCode": "FM",
      "countryName": "Micronesia, Federated States of",
      "timeZone": "Pacific/Kosrae",
    },
    {
      "countryCode": "FM",
      "countryName": "Micronesia, Federated States of",
      "timeZone": "Pacific/Pohnpei",
    },
    {
      "countryCode": "MD",
      "countryName": "Moldova, Republic of",
      "timeZone": "Europe/Chisinau",
    },
    {
      "countryCode": "MC",
      "countryName": "Monaco",
      "timeZone": "Europe/Monaco",
    },
    {
      "countryCode": "MN",
      "countryName": "Mongolia",
      "timeZone": "Asia/Choibalsan",
    },
    {
      "countryCode": "MN",
      "countryName": "Mongolia",
      "timeZone": "Asia/Hovd",
    },
    {
      "countryCode": "MN",
      "countryName": "Mongolia",
      "timeZone": "Asia/Ulaanbaatar",
    },
    {
      "countryCode": "ME",
      "countryName": "Montenegro",
      "timeZone": "Europe/Podgorica",
    },
    {
      "countryCode": "MS",
      "countryName": "Montserrat",
      "timeZone": "America/Montserrat",
    },
    {
      "countryCode": "MA",
      "countryName": "Morocco",
      "timeZone": "Africa/Casablanca",
    },
    {
      "countryCode": "MA",
      "countryName": "Morocco",
      "timeZone": "Africa/El_Aaiun",
    },
    {
      "countryCode": "MZ",
      "countryName": "Mozambique",
      "timeZone": "Africa/Maputo",
    },
    {
      "countryCode": "MM",
      "countryName": "Myanmar",
      "timeZone": "Asia/Yangon",
    },
    {
      "countryCode": "NA",
      "countryName": "Namibia",
      "timeZone": "Africa/Windhoek",
    },
    {
      "countryCode": "NR",
      "countryName": "Nauru",
      "timeZone": "Pacific/Nauru",
    },
    {
      "countryCode": "NP",
      "countryName": "Nepal",
      "timeZone": "Asia/Kathmandu",
    },
    {
      "countryCode": "NL",
      "countryName": "Netherlands",
      "timeZone": "Europe/Amsterdam",
    },
    {
      "countryCode": "NC",
      "countryName": "New Caledonia",
      "timeZone": "Pacific/Noumea",
    },
    {
      "countryCode": "NZ",
      "countryName": "New Zealand",
      "timeZone": "Pacific/Auckland",
    },
    {
      "countryCode": "NZ",
      "countryName": "New Zealand",
      "timeZone": "Pacific/Chatham",
    },
    {
      "countryCode": "NI",
      "countryName": "Nicaragua",
      "timeZone": "America/Managua",
    },
    {
      "countryCode": "NE",
      "countryName": "Niger",
      "timeZone": "Africa/Niamey",
    },
    {
      "countryCode": "NG",
      "countryName": "Nigeria",
      "timeZone": "Africa/Lagos",
    },
    {
      "countryCode": "NU",
      "countryName": "Niue",
      "timeZone": "Pacific/Niue",
    },
    {
      "countryCode": "NF",
      "countryName": "Norfolk Island",
      "timeZone": "Pacific/Norfolk",
    },
    {
      "countryCode": "MP",
      "countryName": "Northern Mariana Islands",
      "timeZone": "Pacific/Saipan",
    },
    {
      "countryCode": "NO",
      "countryName": "Norway",
      "timeZone": "Europe/Oslo",
    },
    {
      "countryCode": "OM",
      "countryName": "Oman",
      "timeZone": "Asia/Muscat",
    },
    {
      "countryCode": "PK",
      "countryName": "Pakistan",
      "timeZone": "Asia/Karachi",
    },
    {
      "countryCode": "PW",
      "countryName": "Palau",
      "timeZone": "Pacific/Palau",
    },
    {
      "countryCode": "PS",
      "countryName": "Palestine, State of",
      "timeZone": "Asia/Gaza",
    },
    {
      "countryCode": "PS",
      "countryName": "Palestine, State of",
      "timeZone": "Asia/Hebron",
    },
    {
      "countryCode": "PA",
      "countryName": "Panama",
      "timeZone": "America/Panama",
    },
    {
      "countryCode": "PG",
      "countryName": "Papua New Guinea",
      "timeZone": "Pacific/Bougainville",
    },
    {
      "countryCode": "PG",
      "countryName": "Papua New Guinea",
      "timeZone": "Pacific/Port_Moresby",
    },
    {
      "countryCode": "PY",
      "countryName": "Paraguay",
      "timeZone": "America/Asuncion",
    },
    {
      "countryCode": "PE",
      "countryName": "Peru",
      "timeZone": "America/Lima",
    },
    {
      "countryCode": "PH",
      "countryName": "Philippines",
      "timeZone": "Asia/Manila",
    },
    {
      "countryCode": "PN",
      "countryName": "Pitcairn",
      "timeZone": "Pacific/Pitcairn",
    },
    {
      "countryCode": "PL",
      "countryName": "Poland",
      "timeZone": "Europe/Warsaw",
    },
    {
      "countryCode": "PT",
      "countryName": "Portugal",
      "timeZone": "Atlantic/Azores",
    },
    {
      "countryCode": "PT",
      "countryName": "Portugal",
      "timeZone": "Atlantic/Madeira",
    },
    {
      "countryCode": "PT",
      "countryName": "Portugal",
      "timeZone": "Europe/Lisbon",
    },
    {
      "countryCode": "PR",
      "countryName": "Puerto Rico",
      "timeZone": "America/Puerto_Rico",
    },
    {
      "countryCode": "QA",
      "countryName": "Qatar",
      "timeZone": "Asia/Qatar",
    },
    {
      "countryCode": "RO",
      "countryName": "Romania",
      "timeZone": "Europe/Bucharest",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Anadyr",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Barnaul",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Chita",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Irkutsk",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Kamchatka",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Khandyga",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Krasnoyarsk",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Magadan",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Novokuznetsk",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Novosibirsk",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Omsk",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Sakhalin",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Srednekolymsk",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Tomsk",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Ust-Nera",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Vladivostok",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Yakutsk",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Asia/Yekaterinburg",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Europe/Astrakhan",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Europe/Kaliningrad",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Europe/Kirov",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Europe/Moscow",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Europe/Samara",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Europe/Saratov",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Europe/Ulyanovsk",
    },
    {
      "countryCode": "RU",
      "countryName": "Russian Federation",
      "timeZone": "Europe/Volgograd",
    },
    {
      "countryCode": "RW",
      "countryName": "Rwanda",
      "timeZone": "Africa/Kigali",
    },
    {
      "countryCode": "RE",
      "countryName": "Réunion",
      "timeZone": "Indian/Reunion",
    },
    {
      "countryCode": "BL",
      "countryName": "Saint Barthélemy",
      "timeZone": "America/St_Barthelemy",
    },
    {
      "countryCode": "SH",
      "countryName": "Saint Helena, Ascension and Tristan da Cunha",
      "timeZone": "Atlantic/St_Helena",
    },
    {
      "countryCode": "KN",
      "countryName": "Saint Kitts and Nevis",
      "timeZone": "America/St_Kitts",
    },
    {
      "countryCode": "LC",
      "countryName": "Saint Lucia",
      "timeZone": "America/St_Lucia",
    },
    {
      "countryCode": "MF",
      "countryName": "Saint Martin (French part)",
      "timeZone": "America/Marigot",
    },
    {
      "countryCode": "PM",
      "countryName": "Saint Pierre and Miquelon",
      "timeZone": "America/Miquelon",
    },
    {
      "countryCode": "VC",
      "countryName": "Saint Vincent and the Grenadines",
      "timeZone": "America/St_Vincent",
    },
    {
      "countryCode": "WS",
      "countryName": "Samoa",
      "timeZone": "Pacific/Apia",
    },
    {
      "countryCode": "SM",
      "countryName": "San Marino",
      "timeZone": "Europe/San_Marino",
    },
    {
      "countryCode": "ST",
      "countryName": "Sao Tome and Principe",
      "timeZone": "Africa/Sao_Tome",
    },
    {
      "countryCode": "SA",
      "countryName": "Saudi Arabia",
      "timeZone": "Asia/Riyadh",
    },
    {
      "countryCode": "SN",
      "countryName": "Senegal",
      "timeZone": "Africa/Dakar",
    },
    {
      "countryCode": "RS",
      "countryName": "Serbia",
      "timeZone": "Europe/Belgrade",
    },
    {
      "countryCode": "SC",
      "countryName": "Seychelles",
      "timeZone": "Indian/Mahe",
    },
    {
      "countryCode": "SL",
      "countryName": "Sierra Leone",
      "timeZone": "Africa/Freetown",
    },
    {
      "countryCode": "SG",
      "countryName": "Singapore",
      "timeZone": "Asia/Singapore",
    },
    {
      "countryCode": "SX",
      "countryName": "Sint Maarten (Dutch part)",
      "timeZone": "America/Lower_Princes",
    },
    {
      "countryCode": "SK",
      "countryName": "Slovakia",
      "timeZone": "Europe/Bratislava",
    },
    {
      "countryCode": "SI",
      "countryName": "Slovenia",
      "timeZone": "Europe/Ljubljana",
    },
    {
      "countryCode": "SB",
      "countryName": "Solomon Islands",
      "timeZone": "Pacific/Guadalcanal",
    },
    {
      "countryCode": "SO",
      "countryName": "Somalia",
      "timeZone": "Africa/Mogadishu",
    },
    {
      "countryCode": "ZA",
      "countryName": "South Africa",
      "timeZone": "Africa/Johannesburg",
    },
    {
      "countryCode": "GS",
      "countryName": "South Georgia and the South Sandwich Islands",
      "timeZone": "Atlantic/South_Georgia",
    },
    {
      "countryCode": "SS",
      "countryName": "South Sudan",
      "timeZone": "Africa/Juba",
    },
    {
      "countryCode": "ES",
      "countryName": "Spain",
      "timeZone": "Africa/Ceuta",
    },
    {
      "countryCode": "ES",
      "countryName": "Spain",
      "timeZone": "Atlantic/Canary",
    },
    {
      "countryCode": "ES",
      "countryName": "Spain",
      "timeZone": "Europe/Madrid",
    },
    {
      "countryCode": "LK",
      "countryName": "Sri Lanka",
      "timeZone": "Asia/Colombo",
    },
    {
      "countryCode": "SD",
      "countryName": "Sudan",
      "timeZone": "Africa/Khartoum",
    },
    {
      "countryCode": "SR",
      "countryName": "Suriname",
      "timeZone": "America/Paramaribo",
    },
    {
      "countryCode": "SJ",
      "countryName": "Svalbard and Jan Mayen",
      "timeZone": "Arctic/Longyearbyen",
    },
    {
      "countryCode": "SZ",
      "countryName": "Swaziland",
      "timeZone": "Africa/Mbabane",
    },
    {
      "countryCode": "SE",
      "countryName": "Sweden",
      "timeZone": "Europe/Stockholm",
    },
    {
      "countryCode": "CH",
      "countryName": "Switzerland",
      "timeZone": "Europe/Zurich",
    },
    {
      "countryCode": "SY",
      "countryName": "Syrian Arab Republic",
      "timeZone": "Asia/Damascus",
    },
    {
      "countryCode": "TW",
      "countryName": "Taiwan, Province of China",
      "timeZone": "Asia/Taipei",
    },
    {
      "countryCode": "TJ",
      "countryName": "Tajikistan",
      "timeZone": "Asia/Dushanbe",
    },
    {
      "countryCode": "TZ",
      "countryName": "Tanzania, United Republic of",
      "timeZone": "Africa/Dar_es_Salaam",
    },
    {
      "countryCode": "TH",
      "countryName": "Thailand",
      "timeZone": "Asia/Bangkok",
    },
    {
      "countryCode": "TL",
      "countryName": "Timor-Leste",
      "timeZone": "Asia/Dili",
    },
    {
      "countryCode": "TG",
      "countryName": "Togo",
      "timeZone": "Africa/Lome",
    },
    {
      "countryCode": "TK",
      "countryName": "Tokelau",
      "timeZone": "Pacific/Fakaofo",
    },
    {
      "countryCode": "TO",
      "countryName": "Tonga",
      "timeZone": "Pacific/Tongatapu",
    },
    {
      "countryCode": "TT",
      "countryName": "Trinidad and Tobago",
      "timeZone": "America/Port_of_Spain",
    },
    {
      "countryCode": "TN",
      "countryName": "Tunisia",
      "timeZone": "Africa/Tunis",
    },
    {
      "countryCode": "TR",
      "countryName": "Turkey",
      "timeZone": "Europe/Istanbul",
    },
    {
      "countryCode": "TM",
      "countryName": "Turkmenistan",
      "timeZone": "Asia/Ashgabat",
    },
    {
      "countryCode": "TC",
      "countryName": "Turks and Caicos Islands",
      "timeZone": "America/Grand_Turk",
    },
    {
      "countryCode": "TV",
      "countryName": "Tuvalu",
      "timeZone": "Pacific/Funafuti",
    },
    {
      "countryCode": "UG",
      "countryName": "Uganda",
      "timeZone": "Africa/Kampala",
    },
    {
      "countryCode": "UA",
      "countryName": "Ukraine",
      "timeZone": "Europe/Kyiv",
    },
    {
      "countryCode": "UA",
      "countryName": "Ukraine",
      "timeZone": "Europe/Simferopol",
    },
    {
      "countryCode": "AE",
      "countryName": "United Arab Emirates",
      "timeZone": "Asia/Dubai",
    },
    {
      "countryCode": "GB",
      "countryName": "United Kingdom",
      "timeZone": "Europe/London",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Adak",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Anchorage",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Boise",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Chicago",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Denver",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Detroit",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Indiana/Indianapolis",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Indiana/Knox",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Indiana/Marengo",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Indiana/Petersburg",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Indiana/Tell_City",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Indiana/Vevay",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Indiana/Vincennes",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Indiana/Winamac",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Juneau",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Kentucky/Louisville",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Kentucky/Monticello",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Los_Angeles",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Menominee",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Metlakatla",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/New_York",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Nome",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/North_Dakota/Beulah",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/North_Dakota/Center",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/North_Dakota/New_Salem",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Phoenix",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Sitka",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "America/Yakutat",
    },
    {
      "countryCode": "US",
      "countryName": "United States",
      "timeZone": "Pacific/Honolulu",
    },
    {
      "countryCode": "UM",
      "countryName": "United States Minor Outlying Islands",
      "timeZone": "Pacific/Midway",
    },
    {
      "countryCode": "UM",
      "countryName": "United States Minor Outlying Islands",
      "timeZone": "Pacific/Wake",
    },
    {
      "countryCode": "UY",
      "countryName": "Uruguay",
      "timeZone": "America/Montevideo",
    },
    {
      "countryCode": "UZ",
      "countryName": "Uzbekistan",
      "timeZone": "Asia/Samarkand",
    },
    {
      "countryCode": "UZ",
      "countryName": "Uzbekistan",
      "timeZone": "Asia/Tashkent",
    },
    {
      "countryCode": "VU",
      "countryName": "Vanuatu",
      "timeZone": "Pacific/Efate",
    },
    {
      "countryCode": "VE",
      "countryName": "Venezuela, Bolivarian Republic of",
      "timeZone": "America/Caracas",
    },
    {
      "countryCode": "VN",
      "countryName": "Viet Nam",
      "timeZone": "Asia/Ho_Chi_Minh",
    },
    {
      "countryCode": "VG",
      "countryName": "Virgin Islands, British",
      "timeZone": "America/Tortola",
    },
    {
      "countryCode": "VI",
      "countryName": "Virgin Islands, U.S.",
      "timeZone": "America/St_Thomas",
    },
    {
      "countryCode": "WF",
      "countryName": "Wallis and Futuna",
      "timeZone": "Pacific/Wallis",
    },
    {
      "countryCode": "YE",
      "countryName": "Yemen",
      "timeZone": "Asia/Aden",
    },
    {
      "countryCode": "ZM",
      "countryName": "Zambia",
      "timeZone": "Africa/Lusaka",
    },
    {
      "countryCode": "ZW",
      "countryName": "Zimbabwe",
      "timeZone": "Africa/Harare",
    },
    {
      "countryCode": "AX",
      "countryName": "Åland Islands",
      "timeZone": "Europe/Mariehamn",
    }
  ].filter((country) => {
    return supportedTimezones.includes(country["timeZone"]);
  })
  .map((country) => {
    return {
      ...country,
      "GMTOffset": getTimeZoneOffsetOfLocale(country["timeZone"]),
    };
  })