@ECHO OFF

SET DBVolume = -v 

docker run -ti --rm -p 127.0.0.1:3306:3306 -v D:\MIU\24W-Y2Sem2\Webdev\WebTranslateAPI\db\:/var/lib/mysql   
