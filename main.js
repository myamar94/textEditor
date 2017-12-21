var fonts = document.querySelectorAll("select#fontStyle > option");
for( var i =0 ; i < fonts.length; i++){

    fonts[i].style.fontFamily = fonts[i].value;
}

window.addEventListener("load", function(){

    var editor = theEditor.document;
    editor.designMode = "on";

    bold.addEventListener("click", function(){

        editor.execCommand("Bold");
    })

    italic.addEventListener("click", function(){

        editor.execCommand("Italic");
    })
   
    underline.addEventListener("click", function(){

        editor.execCommand("UnderLine");
    })

    superscript.addEventListener("click", function(){

        editor.execCommand("Superscript");
    })

    subscript.addEventListener("click", function(){

        editor.execCommand("Subscript");
    })

    strike.addEventListener("click", function(){

        editor.execCommand("Strikethrough");
    })

    fontColor.addEventListener("change", function(e){

        editor.execCommand("ForeColor",false, e.target.value);
    });

    backColor.addEventListener("change", function(e){

        editor.execCommand("BackColor",false, e.target.value);
    });

    fontStyle.addEventListener("change", function(e){

        editor.execCommand("FontName",false, e.target.value);
    });

    fontSize.addEventListener("change", function(e){

        editor.execCommand("FontSize",false, e.target.value);
    });
   
   undoBtn.addEventListener("click", function(){

        editor.execCommand("undo");
   });

   redoBtn.addEventListener("click", function(){

        editor.execCommand("redo")
   });

   alignLeft.addEventListener("click", function(){

    editor.execCommand("justifyLeft")
});

alignRight.addEventListener("click", function(){

    editor.execCommand("justifyRight")
});

alignCenter.addEventListener("click", function(){

    editor.execCommand("justifyCenter")
});

alignJustify.addEventListener("click", function(){

    editor.execCommand("justifyFull")
});

orderList.addEventListener("click", function(){

    editor.execCommand("insertOrderedList")
});

unorderList.addEventListener("click", function(){

    editor.execCommand("insertUnorderedList")
});


}, false);

