<?php 
	//保存文件

	function my_write($file_name,$data,$mode='w'){
                     
    if(!in_array($mode,array('w','a','x')))
        return false;
 
    $dir = dirname($file_name);
 
    if(!is_dir($dir))
        $dir = mkdir($dir,0777);
         
    if(!$dir) return false;
 
    $file = fopen($file_name,$mode);
     
    if(!$file || !is_writable($file_name)) return false;
                 
    fwrite($file,$data);
    fclose($file);
     
    return true;
 
}
 $a = my_write('save.md',$_POST['data']);

 if($a){
 	echo  1;
 }else{
 	echo 2;
 }