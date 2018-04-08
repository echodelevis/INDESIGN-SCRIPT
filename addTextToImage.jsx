//==================================================================
// Copyright 2018 PubXPress
//  4-4-2018
// Code:  Francis Daniel
// http://www.frankydee.net
// e-mail: francisxdaniel@gmail.com
//==================================================================
// CREATEUR DE GRID DE PAGE

if (app.documents.length > 0 && app.selection.length > 0) { 
  addTextToImage(app.selection[0]); 
} 

function addTextToImage(obj) { 
  if (obj instanceof Image) { 
    obj = obj.parent; 
  } else if (!obj.hasOwnProperty("images") || obj.images.length == 0) { 
    alert("CHOISIR VOTRE IMAGE"); 
  } 
  var myTF = obj.textFrames.add({geometricBounds:obj.geometricBounds}); 
  myTF.textFramePreferences.properties = { 
    verticalJustification:VerticalJustification.bottomAlign, 
    ignoreWrap:true, 
    insetSpacing:["0p4", "0p4", "0p4", "0p4"] 
  } 
  myTF.texts[0].contents = "@image.jpg@"; 
  myTF.texts[0].properties = { 
    fillColor:"Paper", 
    justification:Justification.centerAlign 
  } 
}