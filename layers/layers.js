var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            //'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WazeWorld_1 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTrafficonline_4 = new ol.layer.Tile({
            'title': 'Google Traffic online',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:140.0223307613098,

            minResolution:0.28004466152261964,

            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_5 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:140.0223307613098,

            minResolution:0.14002233076130982,

            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriBoundariesandPlaces_6 = new ol.layer.Tile({
            'title': 'Esri Boundaries and Places',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RiosPerenesSEIBa25k_7 = new ol.format.GeoJSON();
var features_RiosPerenesSEIBa25k_7 = format_RiosPerenesSEIBa25k_7.readFeatures(json_RiosPerenesSEIBa25k_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosPerenesSEIBa25k_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosPerenesSEIBa25k_7.addFeatures(features_RiosPerenesSEIBa25k_7);
var lyr_RiosPerenesSEIBa25k_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosPerenesSEIBa25k_7,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_RiosPerenesSEIBa25k_7,
                popuplayertitle: "Rios Perenes (SEI-Ba, 25k)",
                interactive: true,
                title: '<img src="styles/legend/RiosPerenesSEIBa25k_7.png" /> Rios Perenes (SEI-Ba, 25k)'
            });
var format_reasmidasVeredasConder2010_8 = new ol.format.GeoJSON();
var features_reasmidasVeredasConder2010_8 = format_reasmidasVeredasConder2010_8.readFeatures(json_reasmidasVeredasConder2010_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasmidasVeredasConder2010_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasmidasVeredasConder2010_8.addFeatures(features_reasmidasVeredasConder2010_8);
var lyr_reasmidasVeredasConder2010_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasmidasVeredasConder2010_8,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_reasmidasVeredasConder2010_8,
                popuplayertitle: "Áreas Úmidas/Veredas (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/reasmidasVeredasConder2010_8.png" /> Áreas Úmidas/Veredas (Conder 2010)'
            });
var format_Trecho_Massa_DaguaConder2010_9 = new ol.format.GeoJSON();
var features_Trecho_Massa_DaguaConder2010_9 = format_Trecho_Massa_DaguaConder2010_9.readFeatures(json_Trecho_Massa_DaguaConder2010_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trecho_Massa_DaguaConder2010_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trecho_Massa_DaguaConder2010_9.addFeatures(features_Trecho_Massa_DaguaConder2010_9);
var lyr_Trecho_Massa_DaguaConder2010_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trecho_Massa_DaguaConder2010_9,
maxResolution:140.0223307613098,
 minResolution:0.28004466152261964,

                style: style_Trecho_Massa_DaguaConder2010_9,
                popuplayertitle: "Trecho_Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Trecho_Massa_DaguaConder2010_9.png" /> Trecho_Massa_Dagua (Conder 2010)'
            });
var format_Massa_DaguaConder2010_10 = new ol.format.GeoJSON();
var features_Massa_DaguaConder2010_10 = format_Massa_DaguaConder2010_10.readFeatures(json_Massa_DaguaConder2010_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Massa_DaguaConder2010_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Massa_DaguaConder2010_10.addFeatures(features_Massa_DaguaConder2010_10);
var lyr_Massa_DaguaConder2010_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Massa_DaguaConder2010_10,
maxResolution:140.0223307613098,
 minResolution:0.28004466152261964,

                style: style_Massa_DaguaConder2010_10,
                popuplayertitle: "Massa_Dagua (Conder 2010)",
                interactive: true,
                title: '<img src="styles/legend/Massa_DaguaConder2010_10.png" /> Massa_Dagua (Conder 2010)'
            });
var format_rea_ImovelSICARSet2025_11 = new ol.format.GeoJSON();
var features_rea_ImovelSICARSet2025_11 = format_rea_ImovelSICARSet2025_11.readFeatures(json_rea_ImovelSICARSet2025_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rea_ImovelSICARSet2025_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rea_ImovelSICARSet2025_11.addFeatures(features_rea_ImovelSICARSet2025_11);
var lyr_rea_ImovelSICARSet2025_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rea_ImovelSICARSet2025_11,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_rea_ImovelSICARSet2025_11,
                popuplayertitle: "Área_Imovel SICAR (Set./2025)",
                interactive: true,
                title: '<img src="styles/legend/rea_ImovelSICARSet2025_11.png" /> Área_Imovel SICAR (Set./2025)'
            });
var format_ImovelRural_CEFIRINEMASet2025_12 = new ol.format.GeoJSON();
var features_ImovelRural_CEFIRINEMASet2025_12 = format_ImovelRural_CEFIRINEMASet2025_12.readFeatures(json_ImovelRural_CEFIRINEMASet2025_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImovelRural_CEFIRINEMASet2025_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImovelRural_CEFIRINEMASet2025_12.addFeatures(features_ImovelRural_CEFIRINEMASet2025_12);
var lyr_ImovelRural_CEFIRINEMASet2025_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImovelRural_CEFIRINEMASet2025_12,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_ImovelRural_CEFIRINEMASet2025_12,
                popuplayertitle: "Imovel Rural_CEFIR (INEMA Set./2025)",
                interactive: true,
                title: '<img src="styles/legend/ImovelRural_CEFIRINEMASet2025_12.png" /> Imovel Rural_CEFIR (INEMA Set./2025)'
            });
var format_SIGEFPrivado_INCRAMar2025_13 = new ol.format.GeoJSON();
var features_SIGEFPrivado_INCRAMar2025_13 = format_SIGEFPrivado_INCRAMar2025_13.readFeatures(json_SIGEFPrivado_INCRAMar2025_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIGEFPrivado_INCRAMar2025_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIGEFPrivado_INCRAMar2025_13.addFeatures(features_SIGEFPrivado_INCRAMar2025_13);
var lyr_SIGEFPrivado_INCRAMar2025_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIGEFPrivado_INCRAMar2025_13,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_SIGEFPrivado_INCRAMar2025_13,
                popuplayertitle: "SIGEF Privado_INCRA (Mar./2025)",
                interactive: true,
                title: '<img src="styles/legend/SIGEFPrivado_INCRAMar2025_13.png" /> SIGEF Privado_INCRA (Mar./2025)'
            });
var format_APP_Parcelamentosv10_14 = new ol.format.GeoJSON();
var features_APP_Parcelamentosv10_14 = format_APP_Parcelamentosv10_14.readFeatures(json_APP_Parcelamentosv10_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP_Parcelamentosv10_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_Parcelamentosv10_14.addFeatures(features_APP_Parcelamentosv10_14);
var lyr_APP_Parcelamentosv10_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP_Parcelamentosv10_14,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_APP_Parcelamentosv10_14,
                popuplayertitle: "APP_Parcelamentos-v10",
                interactive: true,
                title: '<img src="styles/legend/APP_Parcelamentosv10_14.png" /> APP_Parcelamentos-v10'
            });
var format_reasInstitucionais_Parcelamentosv10_15 = new ol.format.GeoJSON();
var features_reasInstitucionais_Parcelamentosv10_15 = format_reasInstitucionais_Parcelamentosv10_15.readFeatures(json_reasInstitucionais_Parcelamentosv10_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasInstitucionais_Parcelamentosv10_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasInstitucionais_Parcelamentosv10_15.addFeatures(features_reasInstitucionais_Parcelamentosv10_15);
var lyr_reasInstitucionais_Parcelamentosv10_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasInstitucionais_Parcelamentosv10_15,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_reasInstitucionais_Parcelamentosv10_15,
                popuplayertitle: "Áreas Institucionais_Parcelamentos-v10",
                interactive: true,
                title: '<img src="styles/legend/reasInstitucionais_Parcelamentosv10_15.png" /> Áreas Institucionais_Parcelamentos-v10'
            });
var format_reasVerdes_Parcelamentosv10_16 = new ol.format.GeoJSON();
var features_reasVerdes_Parcelamentosv10_16 = format_reasVerdes_Parcelamentosv10_16.readFeatures(json_reasVerdes_Parcelamentosv10_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasVerdes_Parcelamentosv10_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasVerdes_Parcelamentosv10_16.addFeatures(features_reasVerdes_Parcelamentosv10_16);
var lyr_reasVerdes_Parcelamentosv10_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasVerdes_Parcelamentosv10_16,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_reasVerdes_Parcelamentosv10_16,
                popuplayertitle: "Áreas Verdes_Parcelamentos-v10",
                interactive: true,
                title: '<img src="styles/legend/reasVerdes_Parcelamentosv10_16.png" /> Áreas Verdes_Parcelamentos-v10'
            });
var format_Geomais_120925_indicativopropriedade_17 = new ol.format.GeoJSON();
var features_Geomais_120925_indicativopropriedade_17 = format_Geomais_120925_indicativopropriedade_17.readFeatures(json_Geomais_120925_indicativopropriedade_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomais_120925_indicativopropriedade_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomais_120925_indicativopropriedade_17.addFeatures(features_Geomais_120925_indicativopropriedade_17);
var lyr_Geomais_120925_indicativopropriedade_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomais_120925_indicativopropriedade_17, 
                style: style_Geomais_120925_indicativopropriedade_17,
                popuplayertitle: "Geomais_12-09-25_indicativo propriedade",
                interactive: true,
                title: '<img src="styles/legend/Geomais_120925_indicativopropriedade_17.png" /> Geomais_12-09-25_indicativo propriedade'
            });
var format_GeomaisSTM_080425_propriedade_18 = new ol.format.GeoJSON();
var features_GeomaisSTM_080425_propriedade_18 = format_GeomaisSTM_080425_propriedade_18.readFeatures(json_GeomaisSTM_080425_propriedade_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeomaisSTM_080425_propriedade_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeomaisSTM_080425_propriedade_18.addFeatures(features_GeomaisSTM_080425_propriedade_18);
var lyr_GeomaisSTM_080425_propriedade_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeomaisSTM_080425_propriedade_18,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_GeomaisSTM_080425_propriedade_18,
                popuplayertitle: "Geomais/STM_08-04-25_propriedade",
                interactive: true,
                title: '<img src="styles/legend/GeomaisSTM_080425_propriedade_18.png" /> Geomais/STM_08-04-25_propriedade'
            });
var format_PraasdePedgiorodestaduais_19 = new ol.format.GeoJSON();
var features_PraasdePedgiorodestaduais_19 = format_PraasdePedgiorodestaduais_19.readFeatures(json_PraasdePedgiorodestaduais_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PraasdePedgiorodestaduais_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PraasdePedgiorodestaduais_19.addFeatures(features_PraasdePedgiorodestaduais_19);
var lyr_PraasdePedgiorodestaduais_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PraasdePedgiorodestaduais_19,
maxResolution:56.00893230452392,
 minResolution:0.28004466152261964,

                style: style_PraasdePedgiorodestaduais_19,
                popuplayertitle: "Praças de Pedágio (rod. estaduais)",
                interactive: true,
                title: '<img src="styles/legend/PraasdePedgiorodestaduais_19.png" /> Praças de Pedágio (rod. estaduais)'
            });
var format_LogradourosOficializadoseouCepeados_20 = new ol.format.GeoJSON();
var features_LogradourosOficializadoseouCepeados_20 = format_LogradourosOficializadoseouCepeados_20.readFeatures(json_LogradourosOficializadoseouCepeados_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosOficializadoseouCepeados_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosOficializadoseouCepeados_20.addFeatures(features_LogradourosOficializadoseouCepeados_20);
var lyr_LogradourosOficializadoseouCepeados_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosOficializadoseouCepeados_20,
maxResolution:11.201786460904787,
 minResolution:0.14002233076130982,

                style: style_LogradourosOficializadoseouCepeados_20,
                popuplayertitle: "Logradouros Oficializados e/ou Cepeados",
                interactive: true,
                title: '<img src="styles/legend/LogradourosOficializadoseouCepeados_20.png" /> Logradouros Oficializados e/ou Cepeados'
            });
var format_LinhaFrreaFCA_21 = new ol.format.GeoJSON();
var features_LinhaFrreaFCA_21 = format_LinhaFrreaFCA_21.readFeatures(json_LinhaFrreaFCA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaFrreaFCA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaFrreaFCA_21.addFeatures(features_LinhaFrreaFCA_21);
var lyr_LinhaFrreaFCA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaFrreaFCA_21,
maxResolution:70.0111653806549,
 minResolution:0.28004466152261964,

                style: style_LinhaFrreaFCA_21,
                popuplayertitle: "Linha Férrea (FCA)",
                interactive: true,
                title: '<img src="styles/legend/LinhaFrreaFCA_21.png" /> Linha Férrea (FCA)'
            });
var format_EixosRodEstSEINFRABa2021_22 = new ol.format.GeoJSON();
var features_EixosRodEstSEINFRABa2021_22 = format_EixosRodEstSEINFRABa2021_22.readFeatures(json_EixosRodEstSEINFRABa2021_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixosRodEstSEINFRABa2021_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixosRodEstSEINFRABa2021_22.addFeatures(features_EixosRodEstSEINFRABa2021_22);
var lyr_EixosRodEstSEINFRABa2021_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EixosRodEstSEINFRABa2021_22,
maxResolution:140.0223307613098,
 minResolution:0.28004466152261964,

                style: style_EixosRodEstSEINFRABa2021_22,
                popuplayertitle: "Eixos Rod. Est. (SEINFRA-Ba/2021)",
                interactive: true,
                title: '<img src="styles/legend/EixosRodEstSEINFRABa2021_22.png" /> Eixos Rod. Est. (SEINFRA-Ba/2021)'
            });
var format_PassarelasemRodovias_23 = new ol.format.GeoJSON();
var features_PassarelasemRodovias_23 = format_PassarelasemRodovias_23.readFeatures(json_PassarelasemRodovias_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PassarelasemRodovias_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassarelasemRodovias_23.addFeatures(features_PassarelasemRodovias_23);
var lyr_PassarelasemRodovias_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PassarelasemRodovias_23,
maxResolution:42.00669922839295,
 minResolution:0.28004466152261964,

                style: style_PassarelasemRodovias_23,
                popuplayertitle: "Passarelas em Rodovias",
                interactive: true,
                title: '<img src="styles/legend/PassarelasemRodovias_23.png" /> Passarelas em Rodovias'
            });
var format_Paradasdenibusemrodovias2022_24 = new ol.format.GeoJSON();
var features_Paradasdenibusemrodovias2022_24 = format_Paradasdenibusemrodovias2022_24.readFeatures(json_Paradasdenibusemrodovias2022_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradasdenibusemrodovias2022_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradasdenibusemrodovias2022_24.addFeatures(features_Paradasdenibusemrodovias2022_24);
var lyr_Paradasdenibusemrodovias2022_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paradasdenibusemrodovias2022_24,
maxResolution:21.003349614196473,
 minResolution:0.28004466152261964,

                style: style_Paradasdenibusemrodovias2022_24,
                popuplayertitle: "Paradas de ônibus em rodovias (2022)",
                interactive: true,
                title: '<img src="styles/legend/Paradasdenibusemrodovias2022_24.png" /> Paradas de ônibus em rodovias (2022)'
            });
var format_Pontos_IdentificaodiversosSEIBa_25 = new ol.format.GeoJSON();
var features_Pontos_IdentificaodiversosSEIBa_25 = format_Pontos_IdentificaodiversosSEIBa_25.readFeatures(json_Pontos_IdentificaodiversosSEIBa_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pontos_IdentificaodiversosSEIBa_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontos_IdentificaodiversosSEIBa_25.addFeatures(features_Pontos_IdentificaodiversosSEIBa_25);cluster_Pontos_IdentificaodiversosSEIBa_25 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Pontos_IdentificaodiversosSEIBa_25
});
var lyr_Pontos_IdentificaodiversosSEIBa_25 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pontos_IdentificaodiversosSEIBa_25,
maxResolution:8.401339845678589,
 minResolution:0.28004466152261964,

                style: style_Pontos_IdentificaodiversosSEIBa_25,
                popuplayertitle: "Pontos_Identificação diversos (SEI/Ba)",
                interactive: true,
                title: '<img src="styles/legend/Pontos_IdentificaodiversosSEIBa_25.png" /> Pontos_Identificação diversos (SEI/Ba)'
            });
var format_PontosdeRefernciadiversosCPP2023_26 = new ol.format.GeoJSON();
var features_PontosdeRefernciadiversosCPP2023_26 = format_PontosdeRefernciadiversosCPP2023_26.readFeatures(json_PontosdeRefernciadiversosCPP2023_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeRefernciadiversosCPP2023_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeRefernciadiversosCPP2023_26.addFeatures(features_PontosdeRefernciadiversosCPP2023_26);cluster_PontosdeRefernciadiversosCPP2023_26 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PontosdeRefernciadiversosCPP2023_26
});
var lyr_PontosdeRefernciadiversosCPP2023_26 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PontosdeRefernciadiversosCPP2023_26,
maxResolution:8.401339845678589,
 minResolution:0.28004466152261964,

                style: style_PontosdeRefernciadiversosCPP2023_26,
                popuplayertitle: "Pontos de Referência diversos (CPP/2023)",
                interactive: true,
                title: '<img src="styles/legend/PontosdeRefernciadiversosCPP2023_26.png" /> Pontos de Referência diversos (CPP/2023)'
            });
var format_Localidadesdiversas2023_27 = new ol.format.GeoJSON();
var features_Localidadesdiversas2023_27 = format_Localidadesdiversas2023_27.readFeatures(json_Localidadesdiversas2023_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdiversas2023_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdiversas2023_27.addFeatures(features_Localidadesdiversas2023_27);cluster_Localidadesdiversas2023_27 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Localidadesdiversas2023_27
});
var lyr_Localidadesdiversas2023_27 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Localidadesdiversas2023_27,
maxResolution:21.003349614196473,
 minResolution:0.5600893230452393,

                style: style_Localidadesdiversas2023_27,
                popuplayertitle: "Localidades diversas (2023)",
                interactive: true,
                title: '<img src="styles/legend/Localidadesdiversas2023_27.png" /> Localidades diversas (2023)'
            });
var format_Bairros_Enderecamento_2022_CNEFE_28 = new ol.format.GeoJSON();
var features_Bairros_Enderecamento_2022_CNEFE_28 = format_Bairros_Enderecamento_2022_CNEFE_28.readFeatures(json_Bairros_Enderecamento_2022_CNEFE_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairros_Enderecamento_2022_CNEFE_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros_Enderecamento_2022_CNEFE_28.addFeatures(features_Bairros_Enderecamento_2022_CNEFE_28);
var lyr_Bairros_Enderecamento_2022_CNEFE_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros_Enderecamento_2022_CNEFE_28,
maxResolution:84.0133984567859,
 minResolution:1.4002233076130983,

                style: style_Bairros_Enderecamento_2022_CNEFE_28,
                popuplayertitle: "Bairros_Enderecamento_2022_CNEFE",
                interactive: true,
                title: '<img src="styles/legend/Bairros_Enderecamento_2022_CNEFE_28.png" /> Bairros_Enderecamento_2022_CNEFE'
            });
var format_DistritosMunicipais2020_29 = new ol.format.GeoJSON();
var features_DistritosMunicipais2020_29 = format_DistritosMunicipais2020_29.readFeatures(json_DistritosMunicipais2020_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosMunicipais2020_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosMunicipais2020_29.addFeatures(features_DistritosMunicipais2020_29);
var lyr_DistritosMunicipais2020_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosMunicipais2020_29,
maxResolution:140.0223307613098,
 minResolution:2.8004466152261966,

                style: style_DistritosMunicipais2020_29,
                popuplayertitle: "Distritos Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/DistritosMunicipais2020_29.png" /> Distritos Municipais (2020)'
            });
var format_LimitesMunicpiosRMS2020_30 = new ol.format.GeoJSON();
var features_LimitesMunicpiosRMS2020_30 = format_LimitesMunicpiosRMS2020_30.readFeatures(json_LimitesMunicpiosRMS2020_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicpiosRMS2020_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicpiosRMS2020_30.addFeatures(features_LimitesMunicpiosRMS2020_30);
var lyr_LimitesMunicpiosRMS2020_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicpiosRMS2020_30, 
                style: style_LimitesMunicpiosRMS2020_30,
                popuplayertitle: "Limites Municípios/RMS (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicpiosRMS2020_30.png" /> Limites Municípios/RMS (2020)'
            });

lyr_OpenTopoMap_0.setVisible(false);lyr_WazeWorld_1.setVisible(false);lyr_OSMStandard_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_GoogleTrafficonline_4.setVisible(false);lyr_GoogleLabels_5.setVisible(false);lyr_EsriBoundariesandPlaces_6.setVisible(true);lyr_RiosPerenesSEIBa25k_7.setVisible(false);lyr_reasmidasVeredasConder2010_8.setVisible(false);lyr_Trecho_Massa_DaguaConder2010_9.setVisible(true);lyr_Massa_DaguaConder2010_10.setVisible(true);lyr_rea_ImovelSICARSet2025_11.setVisible(false);lyr_ImovelRural_CEFIRINEMASet2025_12.setVisible(false);lyr_SIGEFPrivado_INCRAMar2025_13.setVisible(false);lyr_APP_Parcelamentosv10_14.setVisible(false);lyr_reasInstitucionais_Parcelamentosv10_15.setVisible(false);lyr_reasVerdes_Parcelamentosv10_16.setVisible(false);lyr_Geomais_120925_indicativopropriedade_17.setVisible(false);lyr_GeomaisSTM_080425_propriedade_18.setVisible(false);lyr_PraasdePedgiorodestaduais_19.setVisible(true);lyr_LogradourosOficializadoseouCepeados_20.setVisible(true);lyr_LinhaFrreaFCA_21.setVisible(true);lyr_EixosRodEstSEINFRABa2021_22.setVisible(false);lyr_PassarelasemRodovias_23.setVisible(true);lyr_Paradasdenibusemrodovias2022_24.setVisible(true);lyr_Pontos_IdentificaodiversosSEIBa_25.setVisible(false);lyr_PontosdeRefernciadiversosCPP2023_26.setVisible(false);lyr_Localidadesdiversas2023_27.setVisible(true);lyr_Bairros_Enderecamento_2022_CNEFE_28.setVisible(false);lyr_DistritosMunicipais2020_29.setVisible(false);lyr_LimitesMunicpiosRMS2020_30.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_WazeWorld_1,lyr_OSMStandard_2,lyr_GoogleSatellite_3,lyr_GoogleTrafficonline_4,lyr_GoogleLabels_5,lyr_EsriBoundariesandPlaces_6,lyr_RiosPerenesSEIBa25k_7,lyr_reasmidasVeredasConder2010_8,lyr_Trecho_Massa_DaguaConder2010_9,lyr_Massa_DaguaConder2010_10,lyr_rea_ImovelSICARSet2025_11,lyr_ImovelRural_CEFIRINEMASet2025_12,lyr_SIGEFPrivado_INCRAMar2025_13,lyr_APP_Parcelamentosv10_14,lyr_reasInstitucionais_Parcelamentosv10_15,lyr_reasVerdes_Parcelamentosv10_16,lyr_Geomais_120925_indicativopropriedade_17,lyr_GeomaisSTM_080425_propriedade_18,lyr_PraasdePedgiorodestaduais_19,lyr_LogradourosOficializadoseouCepeados_20,lyr_LinhaFrreaFCA_21,lyr_EixosRodEstSEINFRABa2021_22,lyr_PassarelasemRodovias_23,lyr_Paradasdenibusemrodovias2022_24,lyr_Pontos_IdentificaodiversosSEIBa_25,lyr_PontosdeRefernciadiversosCPP2023_26,lyr_Localidadesdiversas2023_27,lyr_Bairros_Enderecamento_2022_CNEFE_28,lyr_DistritosMunicipais2020_29,lyr_LimitesMunicpiosRMS2020_30];
lyr_RiosPerenesSEIBa25k_7.set('fieldAliases', {'Id': 'Id', 'nome': 'nome', 'regime': 'regime', });
lyr_reasmidasVeredasConder2010_8.set('fieldAliases', {'Id': 'Id', 'Descricao': 'Descricao', 'Coef__Defl': 'Coef__Defl', 'Categorias': 'Categorias', 'AREA': 'AREA', });
lyr_Trecho_Massa_DaguaConder2010_9.set('fieldAliases', {'FID_HID_Tr': 'FID_HID_Tr', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'tipoTrecho': 'tipoTrecho', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Massa_DaguaConder2010_10.set('fieldAliases', {'FID_HID_Ma': 'FID_HID_Ma', 'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'tipoMassaD': 'tipoMassaD', 'salinidade': 'salinidade', 'FID_Articu': 'FID_Articu', 'OBJECTID_1': 'OBJECTID_1', 'MI': 'MI', 'Escala': 'Escala', 'Nome_Carta': 'Nome_Carta', 'Ano_Aquisi': 'Ano_Aquisi', 'Shape_Leng': 'Shape_Leng', 'BLOCO': 'BLOCO', 'Equidistan': 'Equidistan', 'Ano_Aqui_1': 'Ano_Aqui_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_rea_ImovelSICARSet2025_11.set('fieldAliases', {'cod_tema': 'cod_tema', 'nom_tema': 'nom_tema', 'cod_imovel': 'cod_imovel', 'mod_fiscal': 'mod_fiscal', 'num_area': 'num_area', 'ind_status': 'ind_status', 'ind_tipo': 'ind_tipo', 'des_condic': 'des_condic', 'municipio': 'municipio', 'cod_estado': 'cod_estado', 'dat_criaca': 'dat_criaca', 'dat_atuali': 'dat_atuali', 'perímetro': 'perímetro', 'área_m²': 'área_m²', 'área_Km²': 'área_Km²', });
lyr_ImovelRural_CEFIRINEMASet2025_12.set('fieldAliases', {'IDE_IMOVEL': 'IDE_IMOVEL', 'DENOMINACA': 'DENOMINACA', 'AREA_REGIS': 'AREA_REGIS', 'QTD_MODFIS': 'QTD_MODFIS', 'MUNICIPIO': 'MUNICIPIO', 'STATUS': 'STATUS', 'NUMERO_CAR': 'NUMERO_CAR', });
lyr_SIGEFPrivado_INCRAMar2025_13.set('fieldAliases', {'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', 'X': 'X', 'Y': 'Y', });
lyr_APP_Parcelamentosv10_14.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area_ha': 'area_ha', 'area_m': 'area_m', });
lyr_reasInstitucionais_Parcelamentosv10_15.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area_ha': 'area_ha', 'area_m': 'area_m', });
lyr_reasVerdes_Parcelamentosv10_16.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area_ha': 'area_ha', 'area_m': 'area_m', });
lyr_Geomais_120925_indicativopropriedade_17.set('fieldAliases', {'id': 'id', 'NOME': 'NOME', 'Coleta': 'Coleta', 'codigo': 'codigo', 'numero': 'numero', 'DOMÍNIO': 'DOMÍNIO', 'nr_agua': 'nr_agua', 'CPF-CPNJ': 'CPF-CPNJ', 'OCUPAÇÃO': 'OCUPAÇÃO', 'SITUAÇÃO': 'SITUAÇÃO', 'PEDOLOGIA': 'PEDOLOGIA', 'dt_coleta': 'dt_coleta', 'id_quadra': 'id_quadra', 'inscricao': 'inscricao', 'TOPOGRAFIA': 'TOPOGRAFIA', 'desativado': 'desativado', 'idEntidade': 'idEntidade', 'nr_energia': 'nr_energia', 'DELIMITAÇ': 'DELIMITAÇ', 'PROPRIEDAD': 'PROPRIEDAD', 'Zona Fisca': 'Zona Fisca', 'complement': 'complement', 'dt_inclusa': 'dt_inclusa', 'id_situaca': 'id_situaca', 'Profundida': 'Profundida', 'id_lote_te': 'id_lote_te', 'nr_matricu': 'nr_matricu', 'Área do L': 'Área do L', 'id_condomi': 'id_condomi', 'id_loteame': 'id_loteame', 'insc_anter': 'insc_anter', 'numero_ant': 'numero_ant', 'tp_condomi': 'tp_condomi', 'Áreas Fis': 'Áreas Fis', 'dt_modific': 'dt_modific', 'codigo_aux': 'codigo_aux', 'CATEGORIA': 'CATEGORIA', 'id_imagem_': 'id_imagem_', 'LADO DO LO': 'LADO DO LO', 'nr_lote_co': 'nr_lote_co', 'nr_lote_lo': 'nr_lote_lo', 'Unidades C': 'Unidades C', 'nr_quadra_': 'nr_quadra_', 'nr_quadr_1': 'nr_quadr_1', 'INSCRIÇÕ': 'INSCRIÇÕ', 'Área Tota': 'Área Tota', 'Irregulari': 'Irregulari', 'Observaç�': 'Observaç�', 'nr_cadastr': 'nr_cadastr', 'Área cons': 'Área cons', 'Classifica': 'Classifica', 'Enviado pa': 'Enviado pa', 'Situação': 'Situação', 'Área do _': 'Área do _', 'SITUAÇ�_1': 'SITUAÇ�_1', 'nr_cadas_1': 'nr_cadas_1', 'nr_cadas_2': 'nr_cadas_2', 'Vetorizaç': 'Vetorizaç', 'Área con_': 'Área con_', 'Área co_1': 'Área co_1', 'CPP': 'CPP', 'CPP!': 'CPP!', });
lyr_GeomaisSTM_080425_propriedade_18.set('fieldAliases', {'id': 'id', 'NOME': 'NOME', 'Coleta': 'Coleta', 'codigo': 'codigo', 'DOMÍNIO': 'DOMÍNIO', 'CPF-CPNJ': 'CPF-CPNJ', 'OCUPAÇÃO': 'OCUPAÇÃO', 'TOPOGRAFIA': 'TOPOGRAFIA', 'DELIMITAÇ': 'DELIMITAÇ', 'PROPRIEDAD': 'PROPRIEDAD', 'id_situaca': 'id_situaca', 'Profundida': 'Profundida', 'Área do L': 'Área do L', 'CATEGORIA': 'CATEGORIA', 'nr_inscric': 'nr_inscric', 'Área Tota': 'Área Tota', 'Irregulari': 'Irregulari', 'nr_cadastr': 'nr_cadastr', 'Área cons': 'Área cons', 'Classifica': 'Classifica', 'Situação': 'Situação', '_numero_ca': '_numero_ca', '_matricula': '_matricula', '_categoria': '_categoria', '_proprieda': '_proprieda', '_dominio': '_dominio', '_ocupacao': '_ocupacao', '_area_ocup': '_area_ocup', '_area_terr': '_area_terr', '_tipologia': '_tipologia', '_tipo_imov': '_tipo_imov', '_status': '_status', });
lyr_PraasdePedgiorodestaduais_19.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_LogradourosOficializadoseouCepeados_20.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'webmap': 'webmap', 'class.2': 'class.2', 'compriment': 'compriment', 'MAPA': 'MAPA', });
lyr_LinhaFrreaFCA_21.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'nomeabrev': 'nomeabrev', 'geometriaa': 'geometriaa', 'codtrechof': 'codtrechof', 'posicaorel': 'posicaorel', 'tipotrecho': 'tipotrecho', 'bitola': 'bitola', 'eletrifica': 'eletrifica', 'nrlinhas': 'nrlinhas', 'emarruamen': 'emarruamen', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'cargasupor': 'cargasupor', });
lyr_EixosRodEstSEINFRABa2021_22.set('fieldAliases', {'Name': 'Name', 'fid': 'fid', 'Codigo SRE': 'Codigo SRE', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Local Iní': 'Local Iní', 'Km Inicial': 'Km Inicial', 'Km Final': 'Km Final', 'Extensão': 'Extensão', 'Situação': 'Situação', 'Descriçã': 'Descriçã', 'Tipo de Re': 'Tipo de Re', 'Descriç_1': 'Descriç_1', 'Coincide_3': 'Coincide_3', 'Identifica': 'Identifica', 'Extensã_1': 'Extensã_1', 'Status': 'Status', });
lyr_PassarelasemRodovias_23.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Numero': 'Numero', 'Rodovia': 'Rodovia', 'Gestao': 'Gestao', 'Bairro': 'Bairro', 'Distrito': 'Distrito', });
lyr_Paradasdenibusemrodovias2022_24.set('fieldAliases', {'id': 'id', 'name': 'name', 'via': 'via', 'bairro_loc': 'bairro_loc', 'distrito': 'distrito', 'bases': 'bases', 'org.': 'org.', });
lyr_Pontos_IdentificaodiversosSEIBa_25.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'nomeabrev': 'nomeabrev', 'geometriaa': 'geometriaa', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'matconstr': 'matconstr', });
lyr_PontosdeRefernciadiversosCPP2023_26.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_Localidadesdiversas2023_27.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_Bairros_Enderecamento_2022_CNEFE_28.set('fieldAliases', {'id': 'id', 'nm_bairro': 'nm_bairro', 'cod_bairro': 'cod_bairro', 'distrito': 'distrito', 'situação': 'situação', 'bairros': 'bairros', 'rotulos': 'rotulos', 'CNEFE 2022': 'CNEFE 2022', 'Hab_Dom': 'Hab_Dom', 'PopEst_22': 'PopEst_22', 'area_Ha': 'area_Ha', 'Perim_km': 'Perim_km', 'Pop_est_24': 'Pop_est_24', 'area_km2': 'area_km2', 'Dens_km2': 'Dens_km2', 'Dens_Ha': 'Dens_Ha', 'hab_dom_1': 'hab_dom_1', });
lyr_DistritosMunicipais2020_29.set('fieldAliases', {'id': 'id', 'cd_mun': 'cd_mun', 'cd_dist': 'cd_dist', 'nm_dist': 'nm_dist', 'Perímetro': 'Perímetro', 'Área': 'Área', 'percentual': 'percentual', 'cg_majorit': 'cg_majorit', 'cb_heigh': 'cb_heigh', });
lyr_LimitesMunicpiosRMS2020_30.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_RiosPerenesSEIBa25k_7.set('fieldImages', {'Id': 'TextEdit', 'nome': 'TextEdit', 'regime': 'TextEdit', });
lyr_reasmidasVeredasConder2010_8.set('fieldImages', {'Id': 'Range', 'Descricao': 'TextEdit', 'Coef__Defl': 'TextEdit', 'Categorias': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Trecho_Massa_DaguaConder2010_9.set('fieldImages', {'FID_HID_Tr': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'tipoTrecho': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Massa_DaguaConder2010_10.set('fieldImages', {'FID_HID_Ma': 'Range', 'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'tipoMassaD': 'Range', 'salinidade': 'Range', 'FID_Articu': 'Range', 'OBJECTID_1': 'Range', 'MI': 'TextEdit', 'Escala': 'Range', 'Nome_Carta': 'TextEdit', 'Ano_Aquisi': 'TextEdit', 'Shape_Leng': 'TextEdit', 'BLOCO': 'TextEdit', 'Equidistan': 'Range', 'Ano_Aqui_1': 'Range', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_rea_ImovelSICARSet2025_11.set('fieldImages', {'cod_tema': 'TextEdit', 'nom_tema': 'TextEdit', 'cod_imovel': 'TextEdit', 'mod_fiscal': 'TextEdit', 'num_area': 'TextEdit', 'ind_status': 'TextEdit', 'ind_tipo': 'TextEdit', 'des_condic': 'TextEdit', 'municipio': 'TextEdit', 'cod_estado': 'TextEdit', 'dat_criaca': 'TextEdit', 'dat_atuali': 'TextEdit', 'perímetro': 'TextEdit', 'área_m²': 'TextEdit', 'área_Km²': 'TextEdit', });
lyr_ImovelRural_CEFIRINEMASet2025_12.set('fieldImages', {'IDE_IMOVEL': 'TextEdit', 'DENOMINACA': 'TextEdit', 'AREA_REGIS': 'TextEdit', 'QTD_MODFIS': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'STATUS': 'TextEdit', 'NUMERO_CAR': 'TextEdit', });
lyr_SIGEFPrivado_INCRAMar2025_13.set('fieldImages', {'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'DateTime', 'data_aprov': 'DateTime', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'DateTime', 'municipio_': 'Range', 'uf_id': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_APP_Parcelamentosv10_14.set('fieldImages', {'OID_': 'Range', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area_ha': 'TextEdit', 'area_m': 'TextEdit', });
lyr_reasInstitucionais_Parcelamentosv10_15.set('fieldImages', {'OID_': 'Range', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area_ha': 'TextEdit', 'area_m': 'TextEdit', });
lyr_reasVerdes_Parcelamentosv10_16.set('fieldImages', {'OID_': 'Range', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area_ha': 'TextEdit', 'area_m': 'TextEdit', });
lyr_Geomais_120925_indicativopropriedade_17.set('fieldImages', {'id': 'Range', 'NOME': 'TextEdit', 'Coleta': 'TextEdit', 'codigo': 'TextEdit', 'numero': 'TextEdit', 'DOMÍNIO': 'TextEdit', 'nr_agua': 'TextEdit', 'CPF-CPNJ': 'TextEdit', 'OCUPAÇÃO': 'TextEdit', 'SITUAÇÃO': 'TextEdit', 'PEDOLOGIA': 'TextEdit', 'dt_coleta': 'TextEdit', 'id_quadra': 'Range', 'inscricao': 'TextEdit', 'TOPOGRAFIA': 'TextEdit', 'desativado': 'Range', 'idEntidade': 'Range', 'nr_energia': 'TextEdit', 'DELIMITAÇ': 'TextEdit', 'PROPRIEDAD': 'TextEdit', 'Zona Fisca': 'TextEdit', 'complement': 'TextEdit', 'dt_inclusa': 'TextEdit', 'id_situaca': 'Range', 'Profundida': 'TextEdit', 'id_lote_te': 'TextEdit', 'nr_matricu': 'TextEdit', 'Área do L': 'TextEdit', 'id_condomi': 'Range', 'id_loteame': 'Range', 'insc_anter': 'TextEdit', 'numero_ant': 'TextEdit', 'tp_condomi': 'TextEdit', 'Áreas Fis': 'TextEdit', 'dt_modific': 'TextEdit', 'codigo_aux': 'TextEdit', 'CATEGORIA': 'TextEdit', 'id_imagem_': 'Range', 'LADO DO LO': 'TextEdit', 'nr_lote_co': 'TextEdit', 'nr_lote_lo': 'TextEdit', 'Unidades C': 'TextEdit', 'nr_quadra_': 'TextEdit', 'nr_quadr_1': 'TextEdit', 'INSCRIÇÕ': 'TextEdit', 'Área Tota': 'TextEdit', 'Irregulari': 'TextEdit', 'Observaç�': 'TextEdit', 'nr_cadastr': 'Range', 'Área cons': 'TextEdit', 'Classifica': 'TextEdit', 'Enviado pa': 'TextEdit', 'Situação': 'TextEdit', 'Área do _': 'TextEdit', 'SITUAÇ�_1': 'TextEdit', 'nr_cadas_1': 'TextEdit', 'nr_cadas_2': 'TextEdit', 'Vetorizaç': 'TextEdit', 'Área con_': 'TextEdit', 'Área co_1': 'TextEdit', 'CPP': 'TextEdit', 'CPP!': 'TextEdit', });
lyr_GeomaisSTM_080425_propriedade_18.set('fieldImages', {'id': 'Range', 'NOME': 'TextEdit', 'Coleta': 'TextEdit', 'codigo': 'TextEdit', 'DOMÍNIO': 'TextEdit', 'CPF-CPNJ': 'TextEdit', 'OCUPAÇÃO': 'TextEdit', 'TOPOGRAFIA': 'TextEdit', 'DELIMITAÇ': 'TextEdit', 'PROPRIEDAD': 'TextEdit', 'id_situaca': 'Range', 'Profundida': 'TextEdit', 'Área do L': 'TextEdit', 'CATEGORIA': 'TextEdit', 'nr_inscric': 'TextEdit', 'Área Tota': 'TextEdit', 'Irregulari': 'TextEdit', 'nr_cadastr': 'Range', 'Área cons': 'TextEdit', 'Classifica': 'TextEdit', 'Situação': 'TextEdit', '_numero_ca': 'TextEdit', '_matricula': 'TextEdit', '_categoria': 'TextEdit', '_proprieda': 'TextEdit', '_dominio': 'TextEdit', '_ocupacao': 'TextEdit', '_area_ocup': 'TextEdit', '_area_terr': 'TextEdit', '_tipologia': 'TextEdit', '_tipo_imov': 'TextEdit', '_status': 'TextEdit', });
lyr_PraasdePedgiorodestaduais_19.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_LogradourosOficializadoseouCepeados_20.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'webmap': 'TextEdit', 'class.2': 'TextEdit', 'compriment': 'TextEdit', 'MAPA': 'TextEdit', });
lyr_LinhaFrreaFCA_21.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'nomeabrev': 'TextEdit', 'geometriaa': 'TextEdit', 'codtrechof': 'TextEdit', 'posicaorel': 'TextEdit', 'tipotrecho': 'TextEdit', 'bitola': 'TextEdit', 'eletrifica': 'TextEdit', 'nrlinhas': 'TextEdit', 'emarruamen': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'cargasupor': 'TextEdit', });
lyr_EixosRodEstSEINFRABa2021_22.set('fieldImages', {'Name': 'TextEdit', 'fid': 'TextEdit', 'Codigo SRE': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Local Iní': 'TextEdit', 'Km Inicial': 'TextEdit', 'Km Final': 'TextEdit', 'Extensão': 'TextEdit', 'Situação': 'TextEdit', 'Descriçã': 'TextEdit', 'Tipo de Re': 'TextEdit', 'Descriç_1': 'TextEdit', 'Coincide_3': 'TextEdit', 'Identifica': 'TextEdit', 'Extensã_1': 'TextEdit', 'Status': 'TextEdit', });
lyr_PassarelasemRodovias_23.set('fieldImages', {'id': 'TextEdit', 'Layer': 'TextEdit', 'Numero': 'Range', 'Rodovia': 'TextEdit', 'Gestao': 'TextEdit', 'Bairro': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_Paradasdenibusemrodovias2022_24.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'via': 'TextEdit', 'bairro_loc': 'TextEdit', 'distrito': 'TextEdit', 'bases': 'TextEdit', 'org.': 'TextEdit', });
lyr_Pontos_IdentificaodiversosSEIBa_25.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'nomeabrev': 'TextEdit', 'geometriaa': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'matconstr': 'TextEdit', });
lyr_PontosdeRefernciadiversosCPP2023_26.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_Localidadesdiversas2023_27.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_Bairros_Enderecamento_2022_CNEFE_28.set('fieldImages', {'id': 'TextEdit', 'nm_bairro': 'TextEdit', 'cod_bairro': 'TextEdit', 'distrito': 'TextEdit', 'situação': 'TextEdit', 'bairros': 'TextEdit', 'rotulos': 'TextEdit', 'CNEFE 2022': 'TextEdit', 'Hab_Dom': 'TextEdit', 'PopEst_22': 'TextEdit', 'area_Ha': 'TextEdit', 'Perim_km': 'TextEdit', 'Pop_est_24': 'TextEdit', 'area_km2': 'TextEdit', 'Dens_km2': 'TextEdit', 'Dens_Ha': 'TextEdit', 'hab_dom_1': 'TextEdit', });
lyr_DistritosMunicipais2020_29.set('fieldImages', {'id': 'TextEdit', 'cd_mun': 'TextEdit', 'cd_dist': 'TextEdit', 'nm_dist': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', 'percentual': 'TextEdit', 'cg_majorit': 'TextEdit', 'cb_heigh': 'TextEdit', });
lyr_LimitesMunicpiosRMS2020_30.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_RiosPerenesSEIBa25k_7.set('fieldLabels', {'Id': 'inline label - always visible', 'nome': 'inline label - always visible', 'regime': 'inline label - always visible', });
lyr_reasmidasVeredasConder2010_8.set('fieldLabels', {'Id': 'hidden field', 'Descricao': 'hidden field', 'Coef__Defl': 'hidden field', 'Categorias': 'hidden field', 'AREA': 'hidden field', });
lyr_Trecho_Massa_DaguaConder2010_9.set('fieldLabels', {'FID_HID_Tr': 'inline label - always visible', 'nome': 'inline label - always visible', 'geometriaA': 'inline label - always visible', 'regime': 'inline label - always visible', 'nomeAbrev': 'inline label - always visible', 'ID_Trecho_': 'inline label - always visible', 'tipoTrecho': 'inline label - always visible', 'salinidade': 'inline label - always visible', 'FID_Articu': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'MI': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Nome_Carta': 'inline label - always visible', 'Ano_Aquisi': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'BLOCO': 'inline label - always visible', 'Equidistan': 'inline label - always visible', 'Ano_Aqui_1': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Ar_1': 'inline label - always visible', 'SHAPE_Le_2': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_Massa_DaguaConder2010_10.set('fieldLabels', {'FID_HID_Ma': 'inline label - always visible', 'nome': 'inline label - always visible', 'geometriaA': 'inline label - always visible', 'regime': 'inline label - always visible', 'nomeAbrev': 'inline label - always visible', 'tipoMassaD': 'inline label - always visible', 'salinidade': 'inline label - always visible', 'FID_Articu': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'MI': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Nome_Carta': 'inline label - always visible', 'Ano_Aquisi': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'BLOCO': 'inline label - always visible', 'Equidistan': 'inline label - always visible', 'Ano_Aqui_1': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Ar_1': 'inline label - always visible', 'Shape_Le_2': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_rea_ImovelSICARSet2025_11.set('fieldLabels', {'cod_tema': 'inline label - always visible', 'nom_tema': 'inline label - always visible', 'cod_imovel': 'inline label - always visible', 'mod_fiscal': 'inline label - always visible', 'num_area': 'inline label - always visible', 'ind_status': 'inline label - always visible', 'ind_tipo': 'inline label - always visible', 'des_condic': 'inline label - always visible', 'municipio': 'inline label - always visible', 'cod_estado': 'inline label - always visible', 'dat_criaca': 'inline label - always visible', 'dat_atuali': 'inline label - always visible', 'perímetro': 'inline label - always visible', 'área_m²': 'inline label - always visible', 'área_Km²': 'inline label - always visible', });
lyr_ImovelRural_CEFIRINEMASet2025_12.set('fieldLabels', {'IDE_IMOVEL': 'inline label - always visible', 'DENOMINACA': 'inline label - always visible', 'AREA_REGIS': 'inline label - always visible', 'QTD_MODFIS': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'NUMERO_CAR': 'inline label - always visible', });
lyr_SIGEFPrivado_INCRAMar2025_13.set('fieldLabels', {'parcela_co': 'inline label - always visible', 'rt': 'inline label - always visible', 'art': 'inline label - always visible', 'situacao_i': 'inline label - always visible', 'codigo_imo': 'inline label - always visible', 'data_submi': 'inline label - always visible', 'data_aprov': 'inline label - always visible', 'status': 'inline label - always visible', 'nome_area': 'inline label - always visible', 'registro_m': 'inline label - always visible', 'registro_d': 'inline label - always visible', 'municipio_': 'inline label - always visible', 'uf_id': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_APP_Parcelamentosv10_14.set('fieldLabels', {'OID_': 'inline label - always visible', 'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'PopupInfo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'area_ha': 'inline label - always visible', 'area_m': 'inline label - always visible', });
lyr_reasInstitucionais_Parcelamentosv10_15.set('fieldLabels', {'OID_': 'inline label - always visible', 'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'PopupInfo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'area_ha': 'inline label - always visible', 'area_m': 'inline label - always visible', });
lyr_reasVerdes_Parcelamentosv10_16.set('fieldLabels', {'OID_': 'inline label - always visible', 'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'PopupInfo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'area_ha': 'inline label - always visible', 'area_m': 'inline label - always visible', });
lyr_Geomais_120925_indicativopropriedade_17.set('fieldLabels', {'id': 'inline label - always visible', 'NOME': 'inline label - visible with data', 'Coleta': 'inline label - always visible', 'codigo': 'hidden field', 'numero': 'hidden field', 'DOMÍNIO': 'inline label - always visible', 'nr_agua': 'hidden field', 'CPF-CPNJ': 'inline label - always visible', 'OCUPAÇÃO': 'inline label - always visible', 'SITUAÇÃO': 'inline label - always visible', 'PEDOLOGIA': 'inline label - always visible', 'dt_coleta': 'hidden field', 'id_quadra': 'hidden field', 'inscricao': 'hidden field', 'TOPOGRAFIA': 'inline label - always visible', 'desativado': 'hidden field', 'idEntidade': 'hidden field', 'nr_energia': 'hidden field', 'DELIMITAÇ': 'hidden field', 'PROPRIEDAD': 'inline label - visible with data', 'Zona Fisca': 'hidden field', 'complement': 'hidden field', 'dt_inclusa': 'hidden field', 'id_situaca': 'hidden field', 'Profundida': 'hidden field', 'id_lote_te': 'hidden field', 'nr_matricu': 'inline label - visible with data', 'Área do L': 'hidden field', 'id_condomi': 'hidden field', 'id_loteame': 'hidden field', 'insc_anter': 'hidden field', 'numero_ant': 'hidden field', 'tp_condomi': 'hidden field', 'Áreas Fis': 'hidden field', 'dt_modific': 'hidden field', 'codigo_aux': 'hidden field', 'CATEGORIA': 'inline label - always visible', 'id_imagem_': 'hidden field', 'LADO DO LO': 'hidden field', 'nr_lote_co': 'hidden field', 'nr_lote_lo': 'hidden field', 'Unidades C': 'hidden field', 'nr_quadra_': 'hidden field', 'nr_quadr_1': 'hidden field', 'INSCRIÇÕ': 'inline label - always visible', 'Área Tota': 'hidden field', 'Irregulari': 'inline label - always visible', 'Observaç�': 'hidden field', 'nr_cadastr': 'inline label - visible with data', 'Área cons': 'hidden field', 'Classifica': 'hidden field', 'Enviado pa': 'hidden field', 'Situação': 'hidden field', 'Área do _': 'hidden field', 'SITUAÇ�_1': 'hidden field', 'nr_cadas_1': 'hidden field', 'nr_cadas_2': 'hidden field', 'Vetorizaç': 'hidden field', 'Área con_': 'hidden field', 'Área co_1': 'hidden field', 'CPP': 'hidden field', 'CPP!': 'hidden field', });
lyr_GeomaisSTM_080425_propriedade_18.set('fieldLabels', {'id': 'inline label - always visible', 'NOME': 'inline label - always visible', 'Coleta': 'hidden field', 'codigo': 'hidden field', 'DOMÍNIO': 'hidden field', 'CPF-CPNJ': 'inline label - always visible', 'OCUPAÇÃO': 'inline label - always visible', 'TOPOGRAFIA': 'inline label - always visible', 'DELIMITAÇ': 'inline label - always visible', 'PROPRIEDAD': 'inline label - always visible', 'id_situaca': 'hidden field', 'Profundida': 'hidden field', 'Área do L': 'hidden field', 'CATEGORIA': 'inline label - always visible', 'nr_inscric': 'inline label - always visible', 'Área Tota': 'inline label - always visible', 'Irregulari': 'inline label - always visible', 'nr_cadastr': 'inline label - always visible', 'Área cons': 'hidden field', 'Classifica': 'inline label - always visible', 'Situação': 'inline label - always visible', '_numero_ca': 'inline label - always visible', '_matricula': 'inline label - always visible', '_categoria': 'inline label - always visible', '_proprieda': 'inline label - always visible', '_dominio': 'inline label - always visible', '_ocupacao': 'inline label - always visible', '_area_ocup': 'hidden field', '_area_terr': 'hidden field', '_tipologia': 'inline label - always visible', '_tipo_imov': 'inline label - always visible', '_status': 'hidden field', });
lyr_PraasdePedgiorodestaduais_19.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'base': 'inline label - always visible', 'fonte': 'inline label - always visible', });
lyr_LogradourosOficializadoseouCepeados_20.set('fieldLabels', {'id': 'hidden field', 'codlog_': 'inline label - always visible', 'logradour_': 'inline label - always visible', 'parcelame_': 'inline label - always visible', 'bairro_': 'inline label - always visible', 'distrito_': 'inline label - always visible', 'cep_': 'inline label - always visible', 'obs_1': 'inline label - always visible', 'obs_2': 'inline label - always visible', 'webmap': 'inline label - always visible', 'class.2': 'inline label - always visible', 'compriment': 'inline label - always visible', 'MAPA': 'inline label - always visible', });
lyr_LinhaFrreaFCA_21.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'nomeabrev': 'inline label - always visible', 'geometriaa': 'inline label - always visible', 'codtrechof': 'inline label - always visible', 'posicaorel': 'inline label - always visible', 'tipotrecho': 'inline label - always visible', 'bitola': 'inline label - always visible', 'eletrifica': 'inline label - always visible', 'nrlinhas': 'inline label - always visible', 'emarruamen': 'inline label - always visible', 'jurisdicao': 'inline label - always visible', 'administra': 'inline label - always visible', 'concession': 'inline label - always visible', 'operaciona': 'inline label - always visible', 'situacaofi': 'inline label - always visible', 'cargasupor': 'inline label - always visible', });
lyr_EixosRodEstSEINFRABa2021_22.set('fieldLabels', {'Name': 'inline label - always visible', 'fid': 'inline label - always visible', 'Codigo SRE': 'inline label - always visible', 'UF': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'Local Iní': 'inline label - always visible', 'Km Inicial': 'inline label - always visible', 'Km Final': 'inline label - always visible', 'Extensão': 'inline label - always visible', 'Situação': 'inline label - always visible', 'Descriçã': 'inline label - always visible', 'Tipo de Re': 'inline label - always visible', 'Descriç_1': 'inline label - always visible', 'Coincide_3': 'inline label - always visible', 'Identifica': 'inline label - always visible', 'Extensã_1': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_PassarelasemRodovias_23.set('fieldLabels', {'id': 'inline label - always visible', 'Layer': 'inline label - always visible', 'Numero': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'Gestao': 'inline label - always visible', 'Bairro': 'inline label - always visible', 'Distrito': 'inline label - always visible', });
lyr_Paradasdenibusemrodovias2022_24.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'via': 'inline label - always visible', 'bairro_loc': 'inline label - always visible', 'distrito': 'inline label - always visible', 'bases': 'inline label - always visible', 'org.': 'inline label - always visible', });
lyr_Pontos_IdentificaodiversosSEIBa_25.set('fieldLabels', {'id': 'hidden field', 'nome': 'inline label - always visible', 'nomeabrev': 'hidden field', 'geometriaa': 'hidden field', 'operaciona': 'hidden field', 'situacaofi': 'hidden field', 'matconstr': 'hidden field', });
lyr_PontosdeRefernciadiversosCPP2023_26.set('fieldLabels', {'id': 'hidden field', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'base': 'inline label - always visible', 'fonte': 'inline label - always visible', });
lyr_Localidadesdiversas2023_27.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'base': 'inline label - always visible', 'fonte': 'inline label - always visible', });
lyr_Bairros_Enderecamento_2022_CNEFE_28.set('fieldLabels', {'id': 'hidden field', 'nm_bairro': 'inline label - always visible', 'cod_bairro': 'hidden field', 'distrito': 'inline label - always visible', 'situação': 'hidden field', 'bairros': 'hidden field', 'rotulos': 'hidden field', 'CNEFE 2022': 'inline label - always visible', 'Hab_Dom': 'hidden field', 'PopEst_22': 'inline label - always visible', 'area_Ha': 'inline label - always visible', 'Perim_km': 'inline label - always visible', 'Pop_est_24': 'inline label - always visible', 'area_km2': 'inline label - always visible', 'Dens_km2': 'inline label - always visible', 'Dens_Ha': 'inline label - always visible', 'hab_dom_1': 'hidden field', });
lyr_DistritosMunicipais2020_29.set('fieldLabels', {'id': 'inline label - always visible', 'cd_mun': 'inline label - always visible', 'cd_dist': 'inline label - always visible', 'nm_dist': 'inline label - always visible', 'Perímetro': 'inline label - always visible', 'Área': 'inline label - always visible', 'percentual': 'inline label - always visible', 'cg_majorit': 'inline label - always visible', 'cb_heigh': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_30.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});