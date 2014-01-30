//Blog: a program that help me to understand many things!
var obj = {
//SELCTOR
//Basic
	"#simple-p" :"p",
	"#dot-a"    :".a",
	"#list-1"   :"#list1",
	"#pb"       :"p.b",

//FILTERS
//Basic	
	"#pfirst"  : "p:first",
	"#plast"   : "p:last",
	"#peven"   : "p:even",
	"#podd"    : "p:odd",
	"#afirst"  : ".a:first",
	"#beven"   : ".b:even",
	"#pgt1"    : "p:gt(1)",
	"#pnotpeq2": "p:not(p:eq(2))",
//Attribute
    "#pclass"  : "p[class]",    
    "#pidpara1": "p[id=para1]",
	"#pidpara" : "p[id^=para]",
	"#pidparalangen": "p[id^=para][lang*=en-]",
//Child, visibility, and content filters
	"#ChilViCon1":"p:contains(3)",
	"#ChilViCon2":"p:parent",
	"#ChilViCon3":":not(#listChilViCon)ul:has(li[class=a])", //Carefull!
	"#ChilViCon4":"#list1 li:nth-child(3)",
	"#ChilViCon5":"#list1 li:nth-child(2n)"
};

$(document).ready(function() {
    for (var key in obj) {
   		addBorderOnHover(key, obj[key]);
	}

    function addBorderOnHover(hoverSel, borderSel) {
        $(hoverSel).hover(function() {
            $(borderSel).css("border", "3px solid red");
          }, function() {
            $(borderSel).css("border", "none");
          }
        );
    }
});

/*OLD CODE*/


/*$("document").ready(function() {
	function hoverIn(select){
		select.css("border", "3px solid red");
	};
  	function hoverOut(select){
		select.css("border", "none");
	};
	$("#pfirst").hover(function() {
		
		hoverIn($("p:first"));
	  }, function() {
		hoverOut($("p:first"));
	  }
	);		
	$("#plast").hover(function() {
		$("p:last").css("border", "3px solid red");
	  }, function() {
		$("p:last").css("border", "none");
	  }
	);	
	$("#peven").hover(function() {
		$("p:even").css("border", "3px solid red");
	  }, function() {
		$("p:even").css("border", "none");
	  }
	);
	$("#podd").hover(function() {
		$("p:odd").css("border", "3px solid red");
	  }, function() {
		$("p:odd").css("border", "none");
	  }
	);
	$("#afirst").hover(function() {
		$(".a:first").css("border", "3px solid red");
	  }, function() {
		$(".a:first").css("border", "none");
	  }
	);		
	$("#beven").hover(function() {
		$(".b:even").css("border", "3px solid red");
	  }, function() {
		$(".b:even").css("border", "none");
	  }
	);	


	$("#pgt1").hover(function() {
		$("p:gt(1)").css("border", "3px solid red");
	  }, function() {
		$("p:gt(1)").css("border", "none");
	  }
	);	        
	$("#pnotpeq2").hover(function() {
		$("p:not(p:eq(2))").css("border", "3px solid red");
	  }, function() {
		$("p:not(p:eq(2))").css("border", "none");
	  }
	);	

	//ATTRIBUTE
	$("#pclass").hover(function() {
		$("p[class]").css("border", "3px solid red");
	  }, function() {
		$("p[class]").css("border", "none");
	  }
	);
	$("#pidpara1").hover(function() {
		$("p[id=para1]").css("border", "3px solid red");
	  }, function() {
		$("p[id=para1]").css("border", "none");
	  }
	);

	$("#pidpara").hover(function() {
		$("p[id^=para]").css("border", "3px solid red");
	  }, function() {
		$("p[id^=para]").css("border", "none");
	  }
	);		
	$("#pidparalangen").hover(function() {
		$("p[id^=para][lang*=en-]").css("border", "3px solid red");
	  }, function() {
		$("p[id^=para][lang*=en-]").css("border", "none");
	  }
	);
});
*/

