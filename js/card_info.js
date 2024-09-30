/*
	,
	[
		"", //ID
		"", //SRC
		"", //NAME
		"", //TYPE
		"", //TAG
		"", //RARE
		"", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		]
*/

/*
全形改半形
0~9
a~z
A~Z
+-=
" "(space)
!?&~
()
①②③
*/

const ID = 0;
const SRC = 1;
const NAME = 2;
const TYPE = 3;
const TAG = 4;
const RARE = 5;
const PRODUCT = 6;
const COLOR = 7;
const HP = 8;
const LEVEL = 9;
const BATON = 10;
const SKILL = 11;
const SPSKILL = 12;
const KEYWORD = 13;
const ART1 = 14;
const ART2 = 15;
const ART3 = 16;
const ART4 = 17;
const ART5 = 18;
const EXTRA = 19;

var cardData = [
	[
		"hYS01-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hY01/hYS01-001_OC.png", //SRC
		"七詩ムメイ", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OC", //RARE
		"スタートエールセット", //PRODUCT
		"白", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-2]<br>ホワイトバトン<br>[ターンに1回]このターンの間、自分の白コラボホロメンのアーツ+20。", //SKILL
		"[ホロパワー:-1]<br>クイックガード<br>[ゲームに1回]相手のターンで、自分の白ホロメンが相手からダメージを受ける時に使える:そのホロメン1人が受けるダメージ-20。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hYS01-002", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hY01/hYS01-002_OC.png", //SRC
		"兎田ぺこら", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"", //RARE
		"スタートエールセット", //PRODUCT
		"緑", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-2]<br>グリーンバトン<br>[ターンに1回]このターンの間、自分の緑コラボホロメンのアーツ+20。", //SKILL
		"[ホロパワー:-1]<br>みんな頑張ろー!<br>[ゲームに1回]自分の緑ホロメン全員のHP20回復。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hYS01-003", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hY01/hYS01-003_OC.png", //SRC
		"小鳥遊キアラ", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OC", //RARE
		"スタートエールセット", //PRODUCT
		"赤", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-2]<br>レッドバトン<br>[ターンに1回]このターンの間、自分の赤コラボホロメンのアーツ+20。", //SKILL
		"[ホロパワー:-1]<br>さあ!もう一度!<br>[ゲームに1回]自分のアーカイブの赤ホロメン1枚を手札に戻す。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hYS01-004", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hY01/hYS01-004_OC.png", //SRC
		"星街すいせい", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OC", //RARE
		"スタートエールセット", //PRODUCT
		"青", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-2]<br>ブルーバトン<br>[ターンに1回]このターンの間、自分の青コラボホロメンのアーツ+20。", //SKILL
		"[ホロパワー:-1]<br>バックショット<br>[ゲームに1回]自分のホロメンが相手のバックホロメンにダメージを与えた時に使える:その相手のバックホロメン1人に特殊ダメージ50を与える。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hY01-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY01-001_C.png", //SRC
		"白エール", //NAME
		"エール", //TYPE
		"", //TAG
		"C", //RARE
		"スタートエールセット", //PRODUCT
		"白", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hY02-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY02-001_C.png", //SRC
		"緑エール", //NAME
		"エール", //TYPE
		"", //TAG
		"C", //RARE
		"スタートエールセット", //PRODUCT
		"緑", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hY03-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY03-001_C.png", //SRC
		"赤エール", //NAME
		"エール", //TYPE
		"", //TAG
		"C", //RARE
		"スタートエールセット", //PRODUCT
		"赤", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hY04-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY04-001_C.png", //SRC
		"青エール", //NAME
		"エール", //TYPE
		"", //TAG
		"", //RARE
		"スタートエールセット", //PRODUCT
		"青", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[

		"hSD01-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-001_OSR.png", //SRC
		"ときのそら", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OSR", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"白", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-1]<br>リプレイスメント<br>[ターンに1回]自分のステージのエール1枚を、自分のホロメンに付け替える。", //SKILL
		"[ホロパワー:-2]<br>じゃあ敵だね?<br>[ゲームに1回]相手のセンターホロメンとバックホロメン1人を交代させる。その後、このターンの間、自分の白センターホロメンのアーツ+50。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-002", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-002_OSR.png", //SRC
		"AZKi", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OSR", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"緑", //COLOR
		"6", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-3]<br>左手に地図<br>[ターンに1回]自分のホロメンの能力でサイコロを振る時に使える:サイコロの目の数1つを宣言し、次に出る目の数を宣言した目として扱う。", //SKILL
		"[ホロパワー:-3]<br>右手にマイク<br>[ゲームに1回]自分のアーカイブのエールを自分の緑ホロメン1人に好きな枚数送る。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-003", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-003_C.png", //SRC
		"ときのそら", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"白", //COLOR
		"60", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>(๑╹ᆺ╹)ぬんぬん<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-004", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-004_R.png", //SRC
		"ときのそら", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"R", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"白", //COLOR
		"50", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>レッツダンス!<br>このターンの間、自分のセンターホロメンのアーツ+20。", //KEYWORD
		"◇<br>オンステージ!<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-005", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-005_U.png", //SRC
		"ときのそら", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"U", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"白", //COLOR
		"150", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白<br>ぬんぬんしよう<br>30", //ART1
		"白◇<br>あなたの心は…くもりのち晴れ!<br>50", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-006", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-006_RR.png", //SRC
		"ときのそら", //NAME
		"Buzzホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"RR", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"白", //COLOR
		"240", //HP
		"1st", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白◇<br>ドリームライブ<br>50", //ART1
		"白緑◇<br>SorAZ シンパシー<br>60+<br>自分のステージにホロメンの〈AZKi〉がいる時、このアーツ+50。", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンがダウンした時、自分のライフ-2" //EXTRA
		],
	[
		"hSD01-007", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-007_C.png", //SRC
		"IRyS", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #歌", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"白", //COLOR
		"50", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>HOPE<br>自分のホロパワーを見る。その中から1枚を公開し、手札に加える。そして自分の手札1枚をホロパワーにする。", //KEYWORD
		"白<br>希望の化身<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-008", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-008_C.png", //SRC
		"AZKi", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"緑", //COLOR
		"70", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>がんばれてえらい!<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-009", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-009_R.png", //SRC
		"AZKi", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"R", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"緑", //COLOR
		"60", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>広がる地図<br>サイコロを1回振れる:4以下の時、自分のエールデッキの上から1枚を、自分のバックホロメンに送る。1の時、さらに、このホロメンをバックポジションに移動できる。", //KEYWORD
		"◇<br>ほいでほいで<br>10", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-010", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-010_U.png", //SRC
		"AZKi", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"U", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"緑", //COLOR
		"160", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"緑◇<br>きみとあてのない旅<br>50", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-011", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-011_RR.png", //SRC
		"AZKi", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"RR", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"緑", //COLOR
		"190", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"緑<br>SorAZ グラビティ<br>60青+50<br>自分のステージにホロメンの〈ときのそら〉がいる時、自分のエールデッキの上から1枚を、自分のホロメンに送る。", //ART1
		"緑緑◇<br>デスティニーソング<br>100+青+50<br>サイコロを1回振れる:奇数の時、このアーツ+50。1の時、さらに、このアーツ+50。", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-012", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-012_C.png", //SRC
		"アイラニ・イオフィフティーン", //NAME
		"ホロメン", //TYPE
		"#ID #ID1期生 #絵", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"緑", //COLOR
		"70", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>一緒にお絵かき!<br>自分のアーカイブの[白エールか緑エール]1枚を自分のセンターホロメンに送れる。", //KEYWORD
		"緑<br>お絵かきたのしー!<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-013", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-013_R.png", //SRC
		"SorAZ", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"R", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"白緑", //COLOR
		"130", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇◇<br>越えたい未来<br>50<br>サイコロを1回振れる:奇数の時、自分のエールデッキの上から1枚を、このホロメンに送る。偶数の時、自分のデッキを1枚引く。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンは〈ときのそら〉〈AZKi〉としても扱う" //EXTRA
		],
	[
		"hSD01-014", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-014_U.png", //SRC
		"天音かなた", //NAME
		"ホロメン", //TYPE
		"#JP #4期生 #歌", //TAG
		"U", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"◇", //COLOR
		"150", //HP
		"Spot", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白緑<br>へい<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはBloomできない" //EXTRA
		],
	[
		"hSD01-015", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-015_U.png", //SRC
		"博衣こより", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX #ケモミミ", //TAG
		"U", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"◇", //COLOR
		"50", //HP
		"Spot", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>SoAzKo<br>■〈ときのそら〉とコラボした時、自分のデッキを1枚引く。<br>■〈AZKi〉とコラボした時、自分のエールデッキの上から1枚を、自分のセンターホロメンに送る。", //KEYWORD
		"◇<br>ピュアピュアピュア~<br>10", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはBloomできない" //EXTRA
		],
	[
		"hSD01-016", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-016_C.png", //SRC
		"春先のどか", //NAME
		"サポート", //TYPE
		"スタッフ", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"自分のデッキを3枚引く。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hSD01-017", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-017_C.png", //SRC
		"マネちゃん", //NAME
		"サポート", //TYPE
		"スタッフ", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分の手札がこのカードを含まずに1枚以上なければ使えない。<br><br>自分の手札すべてをデッキに戻してシャッフルする。そして自分のデッキを5枚引く。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hSD01-018", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-018_C.png", //SRC
		"サブパソコン", //NAME
		"サポート", //TYPE
		"アイテム", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"自分のデッキの上から5枚を見る。その中から、LIMITEDのサポートカード1枚を公開し、手札に加える。そして残ったカードを好きな順でデッキの下に戻す。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-019", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-019_C.png", //SRC
		"スゴイパソコン", //NAME
		"サポート", //TYPE
		"アイテム", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分のエール1枚をアーカイブしなければ使えない。<br><br>自分のデッキから、Buzz以外の[1stホロメンか2ndホロメン]1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hSD01-020", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-020_C.png", //SRC
		"ホロリスの輪", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"サイコロを1回振る:3以上の時、自分のアーカイブのエール1枚を自分のホロメンに送る。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-021", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-021_C.png", //SRC
		"First Gravity", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分の手札がこのカードを含まずに6枚以下でなければ使えない。<br><br>自分のデッキの上から4枚を見る。その中から、〈ときのそら〉と〈AZKi〉を好きな枚数公開し、公開したホロメンを手札に加える。そして残ったカードを好きな順でデッキの下に戻す。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hY01-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY01-001_C.png", //SRC
		"白エール", //NAME
		"エール", //TYPE
		"", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"白", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hY02-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY02-001_C.png", //SRC
		"緑エール", //NAME
		"エール", //TYPE
		"", //TAG
		"C", //RARE
		"スタートデッキ「ときのそら＆AZKi」", //PRODUCT
		"緑", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-001_OSR.png", //SRC
		"天音かなた", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-3]<br>ぎゅっぎゅっ<br>[ターンに1回]相手のセンターホロメンの残りHPを50にする。", //SKILL
		"[ホロパワー:-2]<br>握りつぶしちゃうぞ<br>[ゲームに1回]このターンの間、自分のホロメン1人のアーツ+50。そのホロメンの色が白の時、さらに、そのアーツ+50。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-002", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-002_OSR.png", //SRC
		"七詩ムメイ", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OSR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-2]<br>文明の守護者<br>[ターンに1回]相手のターンで、自分の#Promiseを持つホロメンが相手からダメージを受ける時に使える:そのホロメン1人が受けるダメージ-50。", //SKILL
		"[ホロパワー:-2]<br>アメイジング・ドローイング<br>[ゲームに1回]自分のデッキから、イベント1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-003", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-003_OSR.png", //SRC
		"アキ・ローゼンタール", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OSR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-2]<br>サバイバルパワー<br>[ターンに1回]自分のデッキから、〈石の斧〉1枚を公開し、自分の緑ホロメンに付ける。そしてデッキをシャッフルする。", //SKILL
		"[ホロパワー:-2]<br>大地の唄<br>[ゲームに1回]自分の緑センターホロメンのHPすべて回復。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-004", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-004_OSR.png", //SRC
		"兎田ぺこら", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OSR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"6", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-2]<br>野兎たち~<br>[ターンに1回]相手のターンで、自分のホロメンがダウンした時に使える:自分のダウンしたホロメン1人の緑エールすべてを、自分の他のホロメンに割り振って付け替える。", //SKILL
		"[ホロパワー:-3]<br>幸運兎<br>[ゲームに1回]このターンの間、自分のサイコロの目の数すべてを6として扱う。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-005", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-005_OSR.png", //SRC
		"鷹嶺ルイ", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OSR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-X]<br>女幹部の采配<br>[ターンに1回]自分の赤ホロメンの能力で手札をアーカイブする時に使える:アーカイブする手札1枚につき自分のホロパワー1枚を、かわりにアーカイブできる。", //SKILL
		"[ホロパワー:-2]<br>ホークアイ<br>[ゲームに1回]次の相手のターンの間、相手のセンターホロメンとコラボホロメンは、バトンタッチ、移動、交代できない。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-006", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-006_OSR.png", //SRC
		"小鳥遊キアラ", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OSR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-2]<br>フェニックステール<br>[ターンに1回]自分のアーカイブのホロメン1枚を手札に戻す。", //SKILL
		"[ホロパワー:-2]<br>Rise from the ashes<br>[ゲームに1回]相手のターンで、自分の赤ホロメンがダウンした時に使える:自分の減るライフ-1。さらに、ダウンした1人を選び、そのホロメンを含め重なっているホロメンすべてを手札に戻す。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-007", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-007_OSR.png", //SRC
		"星街すいせい", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OSR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"5", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-2]<br>ほうき星<br>[ターンに1回]この推しホロメンか自分の青ホロメンが相手のバックホロメンにダメージを与えた時に使える:その相手のバックホロメン1人に特殊ダメージ50を与える。", //SKILL
		"[ホロパワー:-2]<br>シューティングスター<br>[ゲームに1回]自分の青ホロメンが相手のセンターホロメンかコラボホロメンにダメージを与えた時に使える:相手のバックホロメン1人にそれと同じ数値の特殊ダメージを与える。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-008", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-008_OSR.png", //SRC
		"こぼ・かなえる", //NAME
		"推しホロメン", //TYPE
		"", //TAG
		"OSR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"6", //HP
		"", //LEVEL
		"", //BATON
		"[ホロパワー:-1]<br>レイン・シャーマニズム<br>[ターンに1回]自分の青ホロメンの能力でエールをアーカイブした時に使える:相手のホロメン1人に特殊ダメージ20を与える。", //SKILL
		"[ホロパワー:-3]<br>雨乞い<br>[ゲームに1回]自分のアーカイブのエール1~5枚を、自分の#IDを持つホロメンに割り振って送る。", //SPSKILL
		"", //KEYWORD
		"", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-009", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-009_C.png", //SRC
		"天音かなた", //NAME
		"ホロメン", //TYPE
		"#JP #4期生 #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"90", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白<br>こんかなた~<br>40<br>このアーツは、相手のセンターホロメンしか対象にできない。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-010", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-010_U.png", //SRC
		"天音かなた", //NAME
		"ホロメン", //TYPE
		"#JP #4期生 #歌", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"60", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>お出かけ天使<br>このターンの間、自分のセンターホロメンのアーツ+10。自分のセンターホロメンが#4期生を持つ時、さらに、自分のセンターホロメンのアーツ+20。", //KEYWORD
		"◇<br>行ってきまーす<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-011", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-011_C.png", //SRC
		"天音かなた", //NAME
		"ホロメン", //TYPE
		"#JP #4期生 #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"150", //HP
		"1st", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白<br>塩対応かなたそ<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-012", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-012_U.png", //SRC
		"天音かなた", //NAME
		"ホロメン", //TYPE
		"#JP #4期生 #歌", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"120", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>アイドルかなたそを<br>サイコロを1回振れる:3以下の時、自分のデッキから、マスコット1枚を公開し、自分のホロメンに付ける。そしてデッキをシャッフルする。", //KEYWORD
		"◇<br>い~っぱい応援して!<br>40", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-013", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-013_R.png", //SRC
		"天音かなた", //NAME
		"ホロメン", //TYPE
		"#JP #4期生 #歌", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"100", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>天使のお仕事<br>相手のセンターホロメンに特殊ダメージ30を与える（ダウンしても相手のライフは減らない）。", //KEYWORD
		"白◇<br>エンジェルステージ<br>50", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-014", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-014_RR.png", //SRC
		"天音かなた", //NAME
		"ホロメン", //TYPE
		"#JP #4期生 #歌", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"200", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>堕ちた天使<br>相手のセンターホロメンに特殊ダメージ50を与える。", //KEYWORD
		"白白白<br>♰漆黒の翼♰<br>100赤+50<br>このアーツで相手のホロメンをダウンさせた時、与えたダメージが残りHPを50以上オーバーしていれば、相手のライフ-1。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-015", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-015_C.png", //SRC
		"七詩ムメイ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #トリ #絵", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"90", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白<br>Oh,Hi<br>10+<br>このターンに自分がサポートカードを使っていた時、このアーツ+20。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-016", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-016_U.png", //SRC
		"七詩ムメイ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #トリ #絵", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"60", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>白いキャンバス<br>自分のセンターホロメンが#Promiseを持つ時、自分のデッキを1枚引く。", //KEYWORD
		"◇<br>リラックスタイム<br>10", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-017", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-017_C.png", //SRC
		"七詩ムメイ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #トリ #絵", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"130", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白<br>一緒にお出かけ<br>20", //ART1
		"白◇<br>コーヒーブレイク<br>60", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-018", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-018_C.png", //SRC
		"七詩ムメイ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #トリ #絵", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"120", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白<br>思い出の欠片<br>20+<br>自分のデッキの上から1枚を公開できる:公開したカードが#Promiseを持つ時、このアーツ+20。そして公開したカードを手札に加える。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-019", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-019_U.png", //SRC
		"七詩ムメイ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #トリ #絵", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"100", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>みんなと歌って踊りたい!<br>DebutからBloomした時、自分のデッキから、#Promiseを持つBuzz以外の[Debutホロメンか1stホロメン]1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //KEYWORD
		"◇<br>いつも応援してくれてありがとう!<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-020", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-020_R.png", //SRC
		"七詩ムメイ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #トリ #絵", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"190", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>あの日の約束<br>自分のデッキから、#Promiseを持つホロメン1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //KEYWORD
		"白◇◇<br>みんな一緒に<br>70+紫+50<br>このターンの間、自分のバックホロメン1人につき、自分のセンターホロメンとコラボホロメンのアーツ+10。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-021", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-021_C.png", //SRC
		"ときのそら", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"100", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白<br>みんな~こんそめ~<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-022", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-022_U.png", //SRC
		"ときのそら", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"110", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>楽しむ準備はできてる!?<br>自分のデッキを1枚引く。", //KEYWORD
		"◇<br>最高の一日にしようね♪<br>40", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-023", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-023_RR.png", //SRC
		"ときのそら", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"210", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>私たちは前に向かって…!<br>自分のデッキを2枚引く。", //KEYWORD
		"白白◇<br>止まらねえぞ<br>80赤+50<br>サイコロを1回振れる:奇数の時、同じホロメンに、このアーツをもう1回使う（このアーツはそのホロメンがダウンするまで繰り返せる）。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-024", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-024_C.png", //SRC
		"ベスティア・ゼータ", //NAME
		"ホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"100", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>ミッションスタート<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-025", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-025_C.png", //SRC
		"ベスティア・ゼータ", //NAME
		"ホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"160", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白<br>温泉は飲まないでね!<br>40", //ART1
		"白◇<br>温泉でくつろぐ一日を<br>60", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-026", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-026_U.png", //SRC
		"ベスティア・ゼータ", //NAME
		"ホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"110", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>新たな運命<br>DebutからBloomした時、自分のデッキから、#ID3期生を持つBuzz以外の[Debutホロメンか1stホロメン]1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //KEYWORD
		"◇<br>ステージみんな「私のもの」<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-027", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-027_RR.png", //SRC
		"ベスティア・ゼータ", //NAME
		"Buzzホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"200", //HP
		"1st", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ギフト<br>V.7<br>[ターンに1回][コラボポジション限定]自分のホロメンが相手からダメージを受ける時、サイコロを1回振れる:奇数の時、そのダメージを受けない。", //KEYWORD
		"白◇◇<br>アクセスコード:ID<br>70+<br>自分のセンターホロメンが#IDを持つ時、このアーツ+50。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンがダウンした時、自分のライフ-2" //EXTRA
		],
	[
		"hBP01-028", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-028_C.png", //SRC
		"IRyS", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"100", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>ハイRyS!<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-029", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-029_C.png", //SRC
		"IRyS", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"160", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"白◇<br>清楚なネフィリムです!<br>50", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-030", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-030_U.png", //SRC
		"IRyS", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #歌", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"110", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>ステージを希望で包もう!<br>このターンの間、自分の#Promiseを持つ[センターホロメンとコラボホロメン]のアーツ+30。", //KEYWORD
		"◇<br>一生懸命歌うから見ててね!<br>40", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-031", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-031_R.png", //SRC
		"IRyS", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #歌", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"白", //COLOR
		"200", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>希望の庭園<br>自分のホロパワーを見る。その中から1枚を公開し、手札に加える。そして自分のデッキの上から1枚をホロパワーにする。", //KEYWORD
		"白◇◇<br>約束の力<br>50+赤+50<br>自分の#Promiseを持つホロメン1人につき、このアーツ+20。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-032", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-032_C.png", //SRC
		"アキ・ローゼンタール", //NAME
		"ホロメン", //TYPE
		"#JP #1期生 #ハーフエルフ #お酒", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"100", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>アロ~ナ!<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-033", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-033_U.png", //SRC
		"アキ・ローゼンタール", //NAME
		"ホロメン", //TYPE
		"#JP #1期生 #ハーフエルフ #お酒", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"50", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>ヒーリングランウェイ<br>サイコロを1回振れる:奇数の時、自分の緑ホロメン1人のHP20回復。", //KEYWORD
		"緑<br>アフターパーティー<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-034", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-034_C.png", //SRC
		"アキ・ローゼンタール", //NAME
		"ホロメン", //TYPE
		"#JP #1期生 #ハーフエルフ #お酒", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"160", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"緑<br>あらあら<br>30", //ART1
		"緑◇<br>むぎゅむぎゅ雑談<br>50", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-035", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-035_C.png", //SRC
		"アキ・ローゼンタール", //NAME
		"ホロメン", //TYPE
		"#JP #1期生 #ハーフエルフ #お酒", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"120", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>ブレーメンの音楽祭<br>自分のアーカイブのツール1枚を自分のホロメンに付けられる。", //KEYWORD
		"緑<br>アキロゼ幻想曲<br>40<br>このホロメンにツールが付いている時、自分のエールデッキの上から1枚を、自分のホロメンに送る。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-036", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-036_U.png", //SRC
		"アキ・ローゼンタール", //NAME
		"ホロメン", //TYPE
		"#JP #1期生 #ハーフエルフ #お酒", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"100", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>ロゼ隊のみんな応援しててね!<br>自分のホロメン1人のHP20回復。", //KEYWORD
		"◇<br>今日もがんばローゼ!<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-037", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-037_R.png", //SRC
		"アキ・ローゼンタール", //NAME
		"ホロメン", //TYPE
		"#JP #1期生 #ハーフエルフ #お酒", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"190", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>ゴシックドール<br>自分のエールデッキの上から1枚を、自分のホロメンに送る。その後、このホロメンにツールが付いている時、このホロメンのHP40回復。", //KEYWORD
		"緑緑緑<br>秘密の合鍵<br>70+白+50<br>このホロメンにツールが付いている時、このアーツ+50。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-038", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-038_C.png", //SRC
		"兎田ぺこら", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #ケモミミ", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"90", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"緑<br>こんぺこー!<br>20+<br>サイコロを1回振れる:偶数の時、このアーツ+20。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-039", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-039_U.png", //SRC
		"兎田ぺこら", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #ケモミミ", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"60", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>ギャラクシーアイドル<br>自分の推しホロメンが〈兎田ぺこら〉の時、サイコロを1回振れる:偶数の時、自分のエールデッキの上から1枚を、自分のホロメンに送る。", //KEYWORD
		"◇<br>無重力ジャンプ!<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-040", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-040_C.png", //SRC
		"兎田ぺこら", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #ケモミミ", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"150", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"緑◇<br>おつぺこでした<br>60", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-041", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-041_U.png", //SRC
		"兎田ぺこら", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #ケモミミ", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"90", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>成長した兎田ぺこらを<br>自分のエールデッキの上から1枚を、自分のセンターホロメンかコラボホロメンに送る。", //KEYWORD
		"◇<br>見逃しちゃだめぺこだよ!<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-042", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-042_R.png", //SRC
		"兎田ぺこら", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #ケモミミ", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"120", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"緑<br>白い砂浜と兎少女<br>40", //ART1
		"緑緑<br>きｔらあああ<br>50+<br>サイコロを1回振れる:出た目の数1につき、このアーツ+10。", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-043", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-043_RR.png", //SRC
		"兎田ぺこら", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #ケモミミ", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"200", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>プリンセスドレス<br>このホロメンのHP50回復。", //KEYWORD
		"緑緑緑◇<br>全人類兎化計画<br>60+青+50<br>サイコロを3回振れる:出た目の合計数1につき、このアーツ+10。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-044", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-044_C.png", //SRC
		"AZKi", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"100", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>こんあずき~<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-045", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-045_U.png", //SRC
		"AZKi", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"50", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ギフト<br>Overwrite<br>自分のライフが3以下の間、このホロメンは、自分の手札の2nd〈AZKi〉に、Bloomレベルを無視してBloomできる。", //KEYWORD
		"緑<br>海辺の街できみと<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-046", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-046_C.png", //SRC
		"AZKi", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"100", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>開拓者のみんながいたから<br>自分のステージのエール1~3枚を選び、自分のホロメンに割り振って付け替えられる。", //KEYWORD
		"◇<br>こんな素敵な世界に来れました!<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-047", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-047_RR.png", //SRC
		"AZKi", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"220", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>いのちの軌跡<br>このホロメンのHP40回復。その後、サイコロを1回振れる:奇数の時、自分のアーカイブの緑エール1~3枚をこのホロメンに送れる。", //KEYWORD
		"緑緑緑◇<br>新たな地図<br>120白+50", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-048", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-048_C.png", //SRC
		"風真いろは", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"120", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>皆殿、風真いろはでござる~<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-049", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-049_C.png", //SRC
		"風真いろは", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"180", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"緑<br>とれたてナス<br>30", //ART1
		"緑◇<br>おひとついかがでござるか?<br>50", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-050", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-050_U.png", //SRC
		"風真いろは", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"140", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ギフト<br>用心棒<br>[コラボポジション限定]相手のホロメンのアーツは、自分のコラボホロメンしか対象にできない（特殊ダメージは除く）。", //KEYWORD
		"緑◇<br>元気を全力でお届けします!<br>20<br>自分のエールデッキの上から1枚を、自分の〈風真いろは〉以外の#秘密結社holoXを持つホロメンに送る。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-051", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-051_RR.png", //SRC
		"風真いろは", //NAME
		"Buzzホロメン", //TYPE
		"#JP #秘密結社holoX", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"250", //HP
		"1st", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"緑◇<br>エールを束ねて<br>50+<br>[コラボポジション限定]このホロメンのエール1枚につき、このアーツ+20（エールは最大5枚まで）。", //ART1
		"緑◇◇<br>風華の輝き<br>70", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンがダウンした時、自分のライフ-2" //EXTRA
		],
	[
		"hBP01-052", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-052_C.png", //SRC
		"アイラニ・イオフィフティーン", //NAME
		"ホロメン", //TYPE
		"#ID #ID1期生 #絵", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"70", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>スラマッパギ!<br>10<br>自分のステージのエール1枚を、自分の#IDを持つホロメンに付け替えられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-053", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-053_C.png", //SRC
		"アイラニ・イオフィフティーン", //NAME
		"ホロメン", //TYPE
		"#ID #ID1期生 #絵", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"170", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇◇<br>あなたの愛しの宇宙人<br>50", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-054", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-054_U.png", //SRC
		"アイラニ・イオフィフティーン", //NAME
		"ホロメン", //TYPE
		"#ID #ID1期生 #絵", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"120", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>緑の光が広がる海<br>自分のエールデッキの上から1枚を、自分の〈アイラニ・イオフィフティーン〉以外の#IDを持つホロメンに送る。", //KEYWORD
		"◇<br>楽しみにしてるよ!<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-055", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-055_R.png", //SRC
		"アイラニ・イオフィフティーン", //NAME
		"ホロメン", //TYPE
		"#ID #ID1期生 #絵", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"緑", //COLOR
		"180", //HP
		"2nd", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>AREA 15<br>自分のアーカイブのエール1枚ずつを、自分の#IDを持つホロメン1~3人に送れる。", //KEYWORD
		"緑◇◇<br>リレーションスカイ<br>100+青+50<br>自分のステージに〈アイラニ・イオフィフティーン〉以外の#IDを持つホロメンがいる時、このアーツ+50。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-056", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-056_C.png", //SRC
		"鷹嶺ルイ", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX #トリ #お酒", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"100", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>皆さん、待っ鷹ね?<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-057", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-057_U.png", //SRC
		"鷹嶺ルイ", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX #トリ #お酒", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"60", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>アポイント<br>相手のコラボホロメンに特殊ダメージ10を与える。", //KEYWORD
		"赤<br>漆黒の翼で誘おう<br>20<br>相手のコラボホロメンに特殊ダメージ10を与える。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-058", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-058_C.png", //SRC
		"鷹嶺ルイ", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX #トリ #お酒", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"170", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"赤<br>こんルイルイ<br>30", //ART1
		"赤◇<br>おつルイルイ><br>50", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-059", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-059_C.png", //SRC
		"鷹嶺ルイ", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX #トリ #お酒", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"130", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"赤<br>パーティーへようこそ<br>30", //ART1
		"赤赤<br>Lui’s Party<br>50<br>自分の手札1枚をアーカイブできる:自分のデッキから、Buzz以外の1stホロメン1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-060", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-060_U.png", //SRC
		"鷹嶺ルイ", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX #トリ #お酒", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"100", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>本当にみんなのおかげ!!<br>DebutからBloomした時、自分の手札1枚をアーカイブできる:自分のデッキを2枚引く。", //KEYWORD
		"◇<br>しっかりついてきてよね!<br>40", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-061", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-061_R.png", //SRC
		"鷹嶺ルイ", //NAME
		"ホロメン", //TYPE
		"#JP #秘密結社holoX #トリ #お酒", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"190", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>組織の司令塔<br>自分のアーカイブの#秘密結社holoXを持つホロメン1~2枚を手札に戻せる。", //KEYWORD
		"赤赤◇<br>ホークレイヴ<br>60黄+50<br>自分の手札1~5枚をアーカイブできる:相手のセンターホロメンかコラボホロメンどちらかに、アーカイブしたカード1枚につき特殊ダメージ20を与える。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-062", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-062_C.png", //SRC
		"小鳥遊キアラ", //NAME
		"ホロメン", //TYPE
		"#EN #Myth #トリ", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"90", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>キッケリキー!<br>20+<br>自分の手札1枚をアーカイブできる:このアーツ+20。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-063", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-063_U.png", //SRC
		"小鳥遊キアラ", //NAME
		"ホロメン", //TYPE
		"#EN #Myth #トリ", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"60", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>きわわの魔法<br>自分のセンターホロメンが#トリを持つ時、自分の手札1枚をアーカイブできる:自分のデッキから、マスコット1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //KEYWORD
		"赤<br>もふもふタイム<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-064", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-064_C.png", //SRC
		"小鳥遊キアラ", //NAME
		"ホロメン", //TYPE
		"#EN #Myth #トリ", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"130", //HP
		"1st", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"赤<br>auf Wiedersehen!<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-065", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-065_U.png", //SRC
		"小鳥遊キアラ", //NAME
		"ホロメン", //TYPE
		"#EN #Myth #トリ", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"110", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>Let's do this!!!!<br>自分のデッキの上から3枚を見る。その中から、ホロメン1枚を公開し、手札に加える。そして残ったカードをアーカイブする。", //KEYWORD
		"◇<br>盛り上げたいとおもいます!<br>40", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-066", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-066_R.png", //SRC
		"小鳥遊キアラ", //NAME
		"ホロメン", //TYPE
		"#EN #Myth #トリ", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"120", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"赤<br>不死鳥の剣姫<br>50", //ART1
		"赤赤<br>跪きなさい。<br>40<br>このホロメンに重なっているホロメン1枚をアーカイブできる:相手のコラボホロメンに特殊ダメージ40を与える。", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-067", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-067_RR.png", //SRC
		"小鳥遊キアラ", //NAME
		"ホロメン", //TYPE
		"#EN #Myth #トリ", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"200", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"赤赤<br>焔色の導き<br>70緑+50", //ART1
		"赤赤赤<br>マジェスティック・フェニックス<br>80+緑+50<br>自分のアーカイブのホロメン1枚につき、このアーツ+10。そして自分のアーカイブのホロメン6枚をデッキに戻してシャッフルする。", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-068", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-068_C.png", //SRC
		"尾丸ポルカ", //NAME
		"ホロメン", //TYPE
		"#JP #5期生 #ケモミミ", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"70", //HP
		"Debut", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>ポルカおるよ!<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-069", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-069_C.png", //SRC
		"尾丸ポルカ", //NAME
		"ホロメン", //TYPE
		"#JP #5期生 #ケモミミ", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"180", //HP
		"1st", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"赤<br>おはぽる<br>20", //ART1
		"赤◇<br>おそぽる<br>40", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-070", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-070_U.png", //SRC
		"尾丸ポルカ", //NAME
		"ホロメン", //TYPE
		"#JP #5期生 #ケモミミ", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"110", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>宴の始まりだ!<br>自分のデッキから、ファン1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //KEYWORD
		"赤◇<br>共依存<br>70<br>このアーツは、このホロメンに〈座員〉が付いていないと使えない。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-071", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-071_RR.png", //SRC
		"尾丸ポルカ", //NAME
		"Buzzホロメン", //TYPE
		"#JP #5期生 #ケモミミ", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"240", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>ポルカイリュージョン<br>自分のアーカイブの〈座員〉1枚を手札に戻せる。", //KEYWORD
		"赤◇<br>ポルカサーカス<br>50+<br>自分のホロメン全員に付いているファン1枚につき、このアーツ+20。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンがダウンした時、自分のライフ-2" //EXTRA
		],
	[
		"hBP01-072", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-072_C.png", //SRC
		"ハコス・ベールズ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #ケモミミ", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"80", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>WAZZUP!!<br>20<br>このホロメンに赤エールが付いている時、サイコロを1回振れる:奇数の時、相手のコラボホロメンに特殊ダメージ20を与える。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-073", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-073_C.png", //SRC
		"ハコス・ベールズ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #ケモミミ", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"140", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"赤◇<br>WITNESS ME!!<br>60", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-074", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-074_U.png", //SRC
		"ハコス・ベールズ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #ケモミミ", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"90", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>ネズミアイドルがいよいよ登場!<br>DebutからBloomした時、自分のアーカイブの[Debutホロメンか1stホロメン]1枚を手札に戻せる:戻したカードが#ENを持つ時、相手のコラボホロメンに特殊ダメージ20を与える。", //KEYWORD
		"◇<br>楽しい時間の始まりだ!<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-075", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-075_R.png", //SRC
		"ハコス・ベールズ", //NAME
		"ホロメン", //TYPE
		"#EN #Promise #ケモミミ", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"赤", //COLOR
		"180", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>カオスシャッフル<br>お互い、手札すべてを好きな順でデッキの下に戻す。次に、お互い、デッキに戻したカード1枚につき、それぞれのデッキを1枚引く。", //KEYWORD
		"赤◇<br>Disorder<br>100緑+50", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-076", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-076_C.png", //SRC
		"星街すいせい", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"90", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>スターの原石<br>20<br>相手のバックホロメン1人に特殊ダメージ10を与える（ダウンしても相手のライフは減らない）。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-077", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-077_U.png", //SRC
		"星街すいせい", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"70", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>煌きのワードローブ<br>自分の推しホロメンが〈星街すいせい〉の時、このホロメンの青エール1枚をアーカイブできる:自分のデッキを2枚引く。", //KEYWORD
		"青<br>新しい衣装<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-078", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-078_C.png", //SRC
		"星街すいせい", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"150", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"青<br>ストリートスナップ<br>30", //ART1
		"青◇<br>木漏れ日のひと時<br>50", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-079", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-079_U.png", //SRC
		"星街すいせい", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"120", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>あっと驚かせるから見逃さないでね!<br>相手のバックホロメン1人に特殊ダメージ20を与える（ダウンしても相手のライフは減らない）。", //KEYWORD
		"◇◇<br>すいちゃんはーー今日もかわいいーー!!<br>50", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-080", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-080_R.png", //SRC
		"星街すいせい", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"110", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>雪山の記憶<br>サイコロを1回振れる:奇数の時、相手のHPが40以上減っているバックホロメン1人をダウンさせる（ダウンしても相手のライフは減らない）。", //KEYWORD
		"青青<br>戦うメイドさん<br>70", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-081", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-081_RR.png", //SRC
		"星街すいせい", //NAME
		"ホロメン", //TYPE
		"#JP #0期生 #歌", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"210", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>空を駆ける光<br>自分のエールデッキの上から1枚を、自分の青ホロメンに送る。", //KEYWORD
		"青青青◇<br>輝く彗星<br>60+赤+50<br>このホロメンの青エール2枚をアーカイブできる:このホロメンに重なっているホロメン1枚につき、このアーツ+60（このアーツは相手のバックホロメンも対象にできる）。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-082", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-082_C.png", //SRC
		"こぼ・かなえる", //NAME
		"ホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"100", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"青<br>ぼこぼこぼこぼ<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-083", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-083_U.png", //SRC
		"こぼ・かなえる", //NAME
		"ホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"70", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>こぼを海に連れて!<br>自分のセンターホロメンが#IDを持つ時、サイコロを1回振れる:3以上の時、自分のエールデッキの上から1枚を、自分のホロメンに送る。", //KEYWORD
		"◇<br>波だ~! 泳げ~!<br>10", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-084", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-084_C.png", //SRC
		"こぼ・かなえる", //NAME
		"ホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"180", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"青◇<br>猫になる~<br>50", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-085", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-085_C.png", //SRC
		"こぼ・かなえる", //NAME
		"ホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"120", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"青<br>perayaan<br>40", //ART1
		"青◇<br>レインドロップス<br>50<br>相手のバックホロメン3人に特殊ダメージ10を与える（ダウンしても相手のライフは減らない）。", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-086", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-086_U.png", //SRC
		"こぼ・かなえる", //NAME
		"ホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"110", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>バーチャルマーケティング<br>自分の#IDを持つホロメンのエール1枚をアーカイブできる:相手のバックホロメン全員に特殊ダメージ10を与える（ダウンしても相手のライフは減らない）。", //KEYWORD
		"◇<br>OnAeru<br>40", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-087", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-087_R.png", //SRC
		"こぼ・かなえる", //NAME
		"ホロメン", //TYPE
		"#ID #ID3期生", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"200", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"青◇<br>雨のマントラ<br>40紫+50<br>このホロメンのエール1枚をアーカイブできる:相手のバックホロメン全員に特殊ダメージ20を与える（ダウンしても相手のライフは減らない）。", //ART1
		"青青◇<br>波のマントラ<br>40紫+50<br>このホロメンのエール2枚をアーカイブできる:相手のセンターホロメンに、相手のバックホロメン全員が受けているダメージの合計数と同じ数値の特殊ダメージを与える。", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-088", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-088_C.png", //SRC
		"ムーナ・ホシノヴァ", //NAME
		"ホロメン", //TYPE
		"#ID #ID1期生 #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"90", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"青<br>ムーン ムーン ムーナだよ!<br>10<br>サイコロを1回振れる:偶数の時、相手のバックホロメン1人に特殊ダメージ20を与える（ダウンしても相手のライフは減らない）。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-089", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-089_C.png", //SRC
		"ムーナ・ホシノヴァ", //NAME
		"ホロメン", //TYPE
		"#ID #ID1期生 #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"140", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"青◇<br>おつムーナ<br>60", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-090", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-090_U.png", //SRC
		"ムーナ・ホシノヴァ", //NAME
		"ホロメン", //TYPE
		"#ID #ID1期生 #歌", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"110", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>ラピスラズリ<br>自分のエールデッキから、[緑エールか青エール]1枚を公開し、自分のホロメンに送る。そしてエールデッキをシャッフルする。", //KEYWORD
		"◇<br>楽しみにしてて!!<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-091", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-091_RR.png", //SRC
		"ムーナ・ホシノヴァ", //NAME
		"Buzzホロメン", //TYPE
		"#ID #ID1期生 #歌", //TAG
		"RR", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"240", //HP
		"1st", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇◇<br>月は夜に。<br>50", //ART1
		"青◇◇<br>ムーンナイトディーバ<br>80<br>このホロメンの[緑エールか青エール]1枚をアーカイブできる:相手のバックホロメン1人に特殊ダメージ30を与える。", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンがダウンした時、自分のライフ-2" //EXTRA
		],
	[
		"hBP01-092", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-092_C.png", //SRC
		"オーロ・クロニー", //NAME
		"ホロメン", //TYPE
		"#EN #Promise", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"70", //HP
		"Debut", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"青<br>クロにちは~<br>10<br>このホロメンのエール1枚を、自分の他の#Promiseを持つホロメンに付け替えられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはデッキに何枚でも入れられる" //EXTRA
		],
	[
		"hBP01-093", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-093_C.png", //SRC
		"オーロ・クロニー", //NAME
		"ホロメン", //TYPE
		"#EN #Promise", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"160", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"◇<br>クロやすみ~<br>40", //ART1
		"青◇<br>お休みクロタイム<br>60", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-094", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-094_U.png", //SRC
		"オーロ・クロニー", //NAME
		"ホロメン", //TYPE
		"#EN #Promise", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"120", //HP
		"1st", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"ブルームエフェクト<br>クロにちは!<br>自分のエールデッキから、自分の#Promiseを持つホロメン1人と同色のエール1枚を公開し、自分の#Promiseを持つホロメンに送る。そしてエールデッキをシャッフルする。", //KEYWORD
		"◇<br>忘れられないfesにしよう!<br>40", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-095", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-095_R.png", //SRC
		"オーロ・クロニー", //NAME
		"ホロメン", //TYPE
		"#EN #Promise", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"青", //COLOR
		"200", //HP
		"2nd", //LEVEL
		"◇◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>巻き戻し<br>相手のバックホロメン1人をDebutホロメンに戻す（ダメージを無くした後、Debutホロメン1枚とエールすべてを残し、他のカードすべてを手札に戻す）。", //KEYWORD
		"青◇◇<br>早送り<br>60赤+50<br>自分のこのターンに出したDebutバックホロメン1人を、自分の手札の1stホロメンにBloomできる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-096", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-096_R.png", //SRC
		"兎田ぺこら", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #ケモミミ", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"◇", //COLOR
		"80", //HP
		"Spot", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>それは「冒険」<br>サイコロを1回振れる:偶数の時、自分のデッキから、Buzzホロメン1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //KEYWORD
		"◇<br>ぺこら~扉の向こう側へ~<br>10", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはBloomできない" //EXTRA
		],
	[
		"hBP01-097", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-097_R.png", //SRC
		"不知火フレア", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #ハーフエルフ", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"◇", //COLOR
		"80", //HP
		"Spot", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>それは「愛と絆の物語」<br>自分のセンターホロメンとお休みしていないバックホロメン1人を交代させる。", //KEYWORD
		"◇<br>フレア~扉の向こう側へ~<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはBloomできない" //EXTRA
		],
	[
		"hBP01-098", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-098_R.png", //SRC
		"白銀ノエル", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #お酒", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"◇", //COLOR
		"90", //HP
		"Spot", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>それは「俺」<br>自分のアーカイブのエール1枚を自分のホロメンに送れる。", //KEYWORD
		"◇◇<br>ノエル~扉の向こう側へ~<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはBloomできない" //EXTRA
		],
	[
		"hBP01-099", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-099_R.png", //SRC
		"宝鐘マリン", //NAME
		"ホロメン", //TYPE
		"#JP #3期生 #絵 #海", //TAG
		"R", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"◇", //COLOR
		"70", //HP
		"Spot", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>それは「エジンバラ城」<br>サイコロを1回振れる:奇数の時、相手のセンターホロメンとバックホロメン1人を交代させる。", //KEYWORD
		"◇<br>マリン~扉の向こう側へ~<br>10", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはBloomできない" //EXTRA
		],
	[
		"hBP01-100", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-100_C.png", //SRC
		"森カリオペ", //NAME
		"ホロメン", //TYPE
		"#EN #Myth #歌", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"◇", //COLOR
		"70", //HP
		"Spot", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>ソウル収穫<br>自分のアーカイブのエール1~3枚をエールデッキに戻せる。そしてエールデッキをシャッフルする。", //KEYWORD
		"◇<br>ソウルご案内<br>30", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはBloomできない" //EXTRA
		],
	[
		"hBP01-101", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-101_C.png", //SRC
		"ワトソン・アメリア", //NAME
		"ホロメン", //TYPE
		"#EN #Myth", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"◇", //COLOR
		"80", //HP
		"Spot", //LEVEL
		"◇", //BATON
		"", //SKILL
		"", //SPSKILL
		"コラボエフェクト<br>手がかり発見<br>自分のアーカイブのアイテム1枚を手札に戻せる。", //KEYWORD
		"◇◇<br>初歩的なことなんでしょう?<br>20", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"このホロメンはBloomできない" //EXTRA
		],
	[
		"hBP01-102", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-102_U.png", //SRC
		"アイドルマイク", //NAME
		"サポート", //TYPE
		"アイテム", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分の手札がこのカードを含まずに6枚以下でなければ使えない。<br><br>自分のデッキの上から4枚を見る。その中から、#歌を持つホロメンを好きな枚数公開し、公開したホロメンを手札に加える。そして残ったカードを好きな順でデッキの下に戻す。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hBP01-103", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-103_U.png", //SRC
		"ゲーミングパソコン", //NAME
		"サポート", //TYPE
		"アイテム", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分のホロパワー1枚をアーカイブしなければ使えない。<br><br>自分のデッキから、自分の推しホロメンと同色のBuzz以外の[Debutホロメンか1stホロメン]1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hBP01-104", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-104_C.png", //SRC
		"ふつうのパソコン", //NAME
		"サポート", //TYPE
		"アイテム", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"自分のデッキから、Debutホロメン1枚を公開し、ステージに出す。そしてデッキをシャッフルする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"ペンライト", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-105_U.png", //SRC
		"ペンライト", //NAME
		"サポート", //TYPE
		"アイテム", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分のホロパワー1枚をアーカイブしなければ使えない。<br><br>自分のエールデッキから、自分のホロメン1人と同色のエール1枚を公開し、自分のホロメンに送る。そしてエールデッキをシャッフルする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hBP01-106", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-106_U.png", //SRC
		"あとは任せた!", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"自分のセンターホロメンとお休みしていないバックホロメン1人を交代させる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-107", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-107_C.png", //SRC
		"アンコール", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"自分のアーカイブのエール1~3枚をエールデッキに戻す。そしてエールデッキをシャッフルする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-108", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-108_U.png", //SRC
		"じゃあ敵だね", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"相手のセンターホロメンとバックホロメン1人を交代させる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hBP01-109", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-109_U.png", //SRC
		"月と兎の物語", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分の手札がこのカードを含まずに6枚以下でなければ使えない。<br><br>自分のデッキの上から4枚を見る。その中から、〈兎田ぺこら〉と〈ムーナ・ホシノヴァ〉を好きな枚数公開し、公開したホロメンを手札に加える。そして残ったカードを好きな順でデッキの下に戻す。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hBP01-110", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-110_U.png", //SRC
		"鈍器でぶっ叩くわよ!", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"サイコロを1回振る:3以下の時、相手のホロメンのエール1枚をアーカイブする。<br><br>◆自分の推しホロメンが〈七詩ムメイ〉の時、能力変更可能<br>[ゲームに1回]相手のセンターホロメンのエール2枚をアーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hBP01-111", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-111_U.png", //SRC
		"ホロライブインドネシア3期生", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分の手札がこのカードを含まずに6枚以下でなければ使えない。<br><br>自分のデッキの上から4枚を見る。その中から、#ID3期生を持つホロメンを好きな枚数公開し、公開したホロメンを手札に加える。そして残ったカードを好きな順でデッキの下に戻す。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hBP01-112", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-112_U.png", //SRC
		"わくわくいたずらタイム", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"サイコロを1回振る:4以上の時、相手のバックホロメン1人に特殊ダメージ20を与える（ダウンしても相手のライフは減らない）。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-113", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-113_U.png", //SRC
		"Promise", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分の手札がこのカードを含まずに6枚以下でなければ使えない。<br><br>自分のデッキの上から4枚を見る。その中から、#Promiseを持つホロメンを好きな枚数公開し、公開したホロメンを手札に加える。そして残ったカードを好きな順でデッキの下に戻す。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hBP01-114", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-114_C.png", //SRC
		"石の斧", //NAME
		"サポート", //TYPE
		"ツール", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■このツールが付いているホロメンのアーツ+20。<br>■このツールが付いているホロメンがアーツを使った時、このホロメンに特殊ダメージ10を与える。<br><br>◆1st以上の〈アキ・ローゼンタール〉に付いていたら能力追加<br>[ターンに1回]自分の能力で、このホロメンが回復した時、自分のデッキを1枚引く。<br><br>ツールは、自分のホロメン1人につき1枚だけ付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-115", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-115_U.png", //SRC
		"星街すいせいのマイク", //NAME
		"サポート", //TYPE
		"ツール", //TAG
		"U", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このツールが付いているホロメンのアーツ+10。<br><br>◆1st以上の〈星街すいせい〉に付いていたら能力追加<br>このツールが付いているホロメンが相手のホロメンをダウンさせた時、自分のエールデッキの上から1枚を、このホロメンに送る。<br><br>ツールは、自分のホロメン1人につき1枚だけ付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-116", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-116_C.png", //SRC
		"うぱお", //NAME
		"サポート", //TYPE
		"マスコット", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このマスコットが付いているホロメンのアーツ+10。<br><br>◆〈天音かなた〉に付いていたら能力追加<br>[ターンに1回]相手のターンで、このマスコットが付いているホロメンがダメージを受けた時、相手のセンターホロメンに特殊ダメージ20を与える。<br><br>マスコットは、自分のホロメン1人につき1枚だけ付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-117", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-117_C.png", //SRC
		"フレンド", //NAME
		"サポート", //TYPE
		"マスコット", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このマスコットが付いているホロメンのアーツ+10。<br><br>◆〈七詩ムメイ〉に付いていたら能力追加<br>相手のターンで、このマスコットが付いているホロメンがダメージを受ける時、このマスコットをアーカイブできる:このマスコットが付いていたホロメンが受けるダメージ-30。<br><br>マスコットは、自分のホロメン1人につき1枚だけ付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-118", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-118_C.png", //SRC
		"あん肝", //NAME
		"サポート", //TYPE
		"マスコット", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このマスコットが付いているホロメンのHP+10。<br><br>◆〈ときのそら〉に付いていたら能力追加<br>このマスコットが付いているホロメンがアーツを使う時、このマスコットを白エールとしても扱う。<br><br>マスコットは、自分のホロメン1人につき1枚だけ付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-119", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-119_C.png", //SRC
		"ジョブズ", //NAME
		"サポート", //TYPE
		"マスコット", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このマスコットが付いているホロメンのHP+10。<br><br>◆〈アキ・ローゼンタール〉に付いていたら能力追加<br>このマスコットが付いているホロメンがアーツを使った時、自分のホロメン1人のHP10回復。<br><br>マスコットは、自分のホロメン1人につき1枚だけ付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-120", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-120_C.png", //SRC
		"がんも", //NAME
		"サポート", //TYPE
		"マスコット", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このマスコットが付いているホロメンのアーツ+10。<br><br>◆〈鷹嶺ルイ〉に付いていたら能力追加<br>このマスコットが付いているホロメンがセンターポジションでアーツを使った時、自分のデッキを1枚引く。<br><br>マスコットは、自分のホロメン1人につき1枚だけ付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-121", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-121_C.png", //SRC
		"Kotori", //NAME
		"サポート", //TYPE
		"マスコット", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このマスコットが付いているホロメンがセンターポジションかコラボポジションで受けるダメージ-10。<br><br>◆〈小鳥遊キアラ〉に付いていたら能力追加<br>このマスコットが付いているホロメンのBloomレベルが上がった時、自分のデッキを1枚引く。<br><br>マスコットは、自分のホロメン1人につき1枚だけ付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-122", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-122_C.png", //SRC
		"ロゼ隊", //NAME
		"サポート", //TYPE
		"ファン", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"相手のターンで、このファンが付いているホロメンがダウンした時、自分のエールデッキの上から1枚を、自分の〈アキ・ローゼンタール〉に送る。<br><br>このファンは、自分の〈アキ・ローゼンタール〉だけに付けられ、1人につき何枚でも付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-123", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-123_C.png", //SRC
		"野うさぎ同盟", //NAME
		"サポート", //TYPE
		"ファン", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このファンが付いているホロメンが能力でサイコロを振った時、このファンをアーカイブできる:サイコロを1回振り直す。<br><br>このファンは、自分の〈兎田ぺこら〉だけに付けられ、1人につき何枚でも付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-124", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-124_C.png", //SRC
		"開拓者", //NAME
		"サポート", //TYPE
		"ファン", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"相手のターンで、このファンが付いているホロメンがダウンした時、このファンが付いているホロメンのエール1枚を、自分の他のホロメンに付け替える。<br><br>このファンは、自分の〈AZKi〉だけに付けられ、1人につき何枚でも付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-125", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-125_C.png", //SRC
		"KFP", //NAME
		"サポート", //TYPE
		"ファン", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このファンをホロメンに手札から付けた時、自分の手札1枚をアーカイブできる:自分のデッキを1枚引く。<br><br>このファンは、自分の〈小鳥遊キアラ〉だけに付けられ、1人につき何枚でも付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hBP01-126", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/hBP01-126_C.png", //SRC
		"座員", //NAME
		"サポート", //TYPE
		"ファン", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■このファンが付いているホロメンがアーツを使う時、このファンを赤エールとしても扱う。<br>■このファンが付いているホロメンが受けるダメージ+10。<br><br>このファンは、自分の〈尾丸ポルカ〉だけに付けられ、1人につき何枚でも付けられる。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hSD01-016", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-016_C.png", //SRC
		"春先のどか", //NAME
		"サポート", //TYPE
		"スタッフ", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"自分のデッキを3枚引く。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hSD01-019", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-019_C.png", //SRC
		"スゴイパソコン", //NAME
		"サポート", //TYPE
		"アイテム", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"このカードは、自分のエール1枚をアーカイブしなければ使えない。<br><br>自分のデッキから、Buzz以外の[1stホロメンか2ndホロメン]1枚を公開し、手札に加える。そしてデッキをシャッフルする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"ターンに1枚しか使えない。" //EXTRA
		],
	[
		"hSD01-020", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/hSD01/hSD01-020_C.png", //SRC
		"ホロリスの輪", //NAME
		"サポート", //TYPE
		"イベント", //TAG
		"C", //RARE
		"ブースターパック「ブルーミングレディアンス」", //PRODUCT
		"", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"サイコロを1回振る:3以上の時、自分のアーカイブのエール1枚を自分のホロメンに送る。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hY01-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY01-001_C.png", //SRC
		"白エール", //NAME
		"エール", //TYPE
		"", //TAG
		"C", //RARE
		"スタートエールセット", //PRODUCT
		"白", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hY02-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY02-001_C.png", //SRC
		"緑エール", //NAME
		"エール", //TYPE
		"", //TAG
		"C", //RARE
		"スタートエールセット", //PRODUCT
		"緑", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hY03-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY03-001_C.png", //SRC
		"赤エール", //NAME
		"エール", //TYPE
		"", //TAG
		"C", //RARE
		"スタートエールセット", //PRODUCT
		"赤", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		],
	[
		"hY04-001", //ID
		"https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/hY04-001_C.png", //SRC
		"青エール", //NAME
		"エール", //TYPE
		"", //TAG
		"", //RARE
		"スタートエールセット", //PRODUCT
		"青", //COLOR
		"", //HP
		"", //LEVEL
		"", //BATON
		"", //SKILL
		"", //SPSKILL
		"", //KEYWORD
		"■ホロメンがステージから離れる時、そのホロメンのエールすべてをアーカイブする。<br>■ホロメンがバトンタッチする時、そのホロメンのエールを指定された枚数アーカイブする。", //ART1
		"", //ART2
		"", //ART3
		"", //ART4
		"", //ART5
		"" //EXTRA
		]
	]