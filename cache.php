<?php
/* (c) 2015 Geodetic institute of Slovenia (http://www.gis.si/en)
 * Licensed under the EUPL V.1.1
 * https://joinup.ec.europa.eu/community/eupl/og_page/european-union-public-licence-eupl-v11
 */
$m = new Memcached();
$m->addServer('localhost', 11211);
$key=$_GET['layers'].$_GET['bbox'];
$img=$m->get($key);

if ($img===FALSE)
{
	$m->set($key,"");
	$img=file_get_contents('http://localhost/geoserver/__temp/wms?'.$_SERVER['QUERY_STRING']);
	$m->set($key,$img);
}
else
{
	while(empty($img)) $img=$m->get($key);
}

echo $img;
