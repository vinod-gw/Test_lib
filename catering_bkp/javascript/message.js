
function openMessage(path,width,height){
	alert("open mesg");
	
	Dialog.confirm({url:path,option:{method:'get'}},
			{title:"Info",width:width,height:height,className:"dialog",okLabel:"yes",cancelLabel:"No",cancel:fnOk});
	/*Dialog.alert("Test of alert panel, check out debug window after closing it", 
            {width:300, height:100, okLabel: "close", 
             ok:function(win) {debug("validate alert panel"); return true;}});*/
}

function fnOk(){
	
}

function showMessage(params){
	if(params!=null){
		var url = "showmessage.jsp?msg="+params;
		 openMessage(url,330,170);	   
	}
}