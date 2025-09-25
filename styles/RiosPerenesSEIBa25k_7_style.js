var size = 0;
var placement = 'point';

var style_RiosPerenesSEIBa25k_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Impact\', sans-serif";
    var labelFill = "#000ad2";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("nome") !== null) {
        labelText = String(feature.get("nome"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,221,255,1.0)', lineDash: [5.4719999999999995,2.7359999999999998], lineCap: 'square', lineJoin: 'bevel', width: 1.3679999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
