<?php
//ひらがな
$_kana[] = range(hexdec(e38181),hexdec(e381bf));
$_kana[] = range(hexdec(e38280),hexdec(e38293));
//カタカナ
$_kana[] = range(hexdec(e382a1),hexdec(e382bf));
$_kana[] = range(hexdec(e38380),hexdec(e383b6));
$kana_list = array();
foreach($_kana as $no_use => $value) {
	foreach($value as $no_use => $value)
	$kana_list[dechex($value)] = pack("H*", dechex($value));
}
foreach($kana_list as $_k => $_v) {
	print "$_k:$_v\n";
}
//アルファベット
$alphabet_list = range(a,z);
foreach($alphabet_list as $_k => $_v) {
	print "$_k:$_v\n";
}
