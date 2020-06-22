import { MRT_BLUE_STATION, BTS_SILOM_STATION, METRO_STATION, LineType } from "../types";

export type Station = {
    lineType: LineType,
    key: METRO_STATION,
    nameEN: string
    isNotAvailable?: boolean,
}

export const STATIONS: Station[] = [
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.NATIONAL_STADIUM, nameEN: 'National Stadium' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.SIAM, nameEN: 'Siam' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.RATCHADAMRI, nameEN: 'Ratchadamri' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.SALA_DAENG, nameEN: 'Sala Deang' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.CHONG_NONSI, nameEN: 'Chong Nonsi' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.SUKSA_WITTHAYA, nameEN: 'Suksa Witthaya', isNotAvailable: true },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.SURASAK, nameEN: 'Surasak' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.SAPHAN_TAKSIN, nameEN: 'Sahpan Taksin' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.KRUNG_THON_BURI, nameEN: 'Krung Thon Buri' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.WONGWIAN_YAI, nameEN: 'Wongwian Yai' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.PHO_NIMIT, nameEN: 'Pho Nimit' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.TALAT_PHLU, nameEN: 'Talat Phlu' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.WUTTHAKAT, nameEN: 'Wutthakat' },
    { lineType: LineType.BTS_SILOM, key: BTS_SILOM_STATION.BANG_WA, nameEN: 'Bang Wa' },

    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.CHARAN_13, nameEN: "Charan 13" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.FAI_CHAI, nameEN: "Fai chai" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.BANG_KHUN_NON, nameEN: "Bang Khun Non" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.BANG_YI_KHAN, nameEN: "Bang Yi Khan" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.SIRINDHORN, nameEN: "Sirindhorn" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.BANG_PHLAT, nameEN: "Bang Phlat" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.BANG_O, nameEN: "Bang O" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.BANG_PHO, nameEN: "Bang Pho" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.TAO_POON, nameEN: "Tao Poon" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.BANG_SUE, nameEN: "Bang Sue" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.KAMPHAENG_PHET, nameEN: "Kamphaeng Phet" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.CHATUCHAK_PARK, nameEN: "Chatuchak Park" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.PHAHON_YOTHIN, nameEN: "Phahon Yothin" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.LAT_PHRAO, nameEN: "Lat Phrao" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.RATCHADAPHISEK, nameEN: "Ratchadaphisek" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.SUTTHISAN, nameEN: "Sutthisan" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.HUAI_KHWANG, nameEN: "Huai Khwang" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.THAILAND_CULTURAL_CENTRE, nameEN: "Thailand Cultural Centre" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.PHRA_RAM_9, nameEN: "Phra Ram 9" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.PHETCHABURI, nameEN: "Phetchaburi" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.SUKHUMVIT, nameEN: "Sukhumvit" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.QUEEN_SIRIKIT_NATIONAL_CONVENTION_CENTRE, nameEN: "Queen Sirikit National Convention Centre" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.KHLONG_TOEI, nameEN: "Khlong Toei" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.LUMPHINI, nameEN: "Lumphini" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.SILOM, nameEN: "Silom" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.SAM_YAN, nameEN: "Sam Yan" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.HUA_LAMPHONG, nameEN: "Hua Lamphong" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.WAT_MANGKON, nameEN: "Wat Mangkon" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.SAM_YOT, nameEN: "Sam Yot" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.SANAM_CHAI, nameEN: "Sanam Chai" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.ITSARAPHAP, nameEN: "Itsaraphap" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.THAPHRA, nameEN: "Thaphra" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.BANG_PHAI, nameEN: "Bang Phai" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.BANG_WA, nameEN: "Bang Wa" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.PHETKASEM_48, nameEN: "Phetkasem 48" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.PHASI_CHAROEN, nameEN: "Phasi Charoen" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.BANG_KHAE, nameEN: "Bang Khae" },
    { lineType: LineType.MRT_BLUE, key: MRT_BLUE_STATION.LAK_SONG, nameEN: "Lak Song" },
];
