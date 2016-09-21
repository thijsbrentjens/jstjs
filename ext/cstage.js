/* (c) 2015 Geodetic institute of Slovenia (http://www.gis.si/en)
 * Licensed under the EUPL V.1.1
 * https://joinup.ec.europa.eu/community/eupl/og_page/european-union-public-licence-eupl-v11
 */

var TJS_URL = 'http://tjs.test.pdok.nl/geoserver/tjs';

var SDMX_DEMO_DATA = '[{"ICD10":"A-R_V-Y","definition":"All causes of death (A00-Y89) excluding S00-T98"},{"ICD10":"A_B","definition":"Certain infectious and parasitic diseases (A00-B99)"},{"ICD10":"A15-A19_B90","definition":"Tuberculosis"},{"ICD10":"B15-B19_B942","definition":"Viral hepatitis and sequelae of viral hepatitis"},{"ICD10":"B20-B24","definition":"Human immunodeficiency virus (HIV) disease"},{"ICD10":"A_B_OTH","definition":"Other infectious and parasitic diseases (remainder of A00-B99)"},{"ICD10":"C00-D48","definition":"Neoplasms"},{"ICD10":"C","definition":"Neoplasms"},{"ICD10":"C00-C14","definition":"Malignant neoplasm of lip, oral cavity, pharynx"},{"ICD10":"C15","definition":"Malignant neoplasm of oesophagus"},{"ICD10":"C16","definition":"Malignant neoplasm of stomach"},{"ICD10":"C18-C21","definition":"Malignant neoplasm of colon, rectosigmoid junction, rectum, anus and anal canal"},{"ICD10":"C22","definition":"Malignant neoplasm of liver and intrahepatic bile ducts"},{"ICD10":"C25","definition":"Malignant neoplasm of pancreas"},{"ICD10":"C32","definition":"Malignant neoplasm of larynx"},{"ICD10":"C33_C34","definition":"Malignant neoplasm of trachea, bronchus and lung"},{"ICD10":"C43","definition":"Malignant melanoma of skin"},{"ICD10":"C50","definition":"Malignant neoplasm of breast"},{"ICD10":"C53","definition":"Malignant neoplasm of cervix uteri"},{"ICD10":"C54_C55","definition":"Malignant neoplasm of other parts of uterus"},{"ICD10":"C56","definition":"Malignant neoplasm of ovary"},{"ICD10":"C61","definition":"Malignant neoplasm of prostate"},{"ICD10":"C64","definition":"Malignant neoplasm of kidney, except renal pelvis"},{"ICD10":"C67","definition":"Malignant neoplasm of bladder"},{"ICD10":"C70-C72","definition":"Malignant neoplasm of brain and central nervous system"},{"ICD10":"C73","definition":"Malignant neoplasm of thyroid gland"},{"ICD10":"C81-C85","definition":"Hodgkin disease and lymphomas"},{"ICD10":"C91-C95","definition":"Leukaemia"},{"ICD10":"C88_C90_C96","definition":"Other malignant neoplasm of lymphoid, haematopoietic and related tissue"},{"ICD10":"C_OTH","definition":"Other malignant neoplasms (remainder of C00-C97)"},{"ICD10":"D00-D48","definition":"Non-malignant neoplasms (benign and uncertain)"},{"ICD10":"D50-D89","definition":"Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism"},{"ICD10":"E","definition":"Endocrine, nutritional and metabolic diseases (E00-E90)"},{"ICD10":"E10-E14","definition":"Diabetes mellitus"},{"ICD10":"E_OTH","definition":"Other endocrine, nutritional and metabolic diseases (remainder of E00-E90)"},{"ICD10":"F","definition":"Mental and behavioural disorders (F00-F99)"},{"ICD10":"F01_F03","definition":"Dementia"},{"ICD10":"F10","definition":"Mental and behavioural disorders due to use of alcohol"},{"ICD10":"TOXICO","definition":"Drug dependence, toxicomania (F11-F16, F18-F19)"},{"ICD10":"F_OTH","definition":"Other mental and behavioural disorders (remainder of F00-F99)"},{"ICD10":"G_H","definition":"Diseases of the nervous system and the sense organs (G00-H95)"},{"ICD10":"G20","definition":"Parkinson disease"},{"ICD10":"G30","definition":"Alzheimer disease"},{"ICD10":"G_H_OTH","definition":"Other diseases of the nervous system and the sense organs (remainder of G00-H95)"},{"ICD10":"I","definition":"Diseases of the circulatory system (I00-I99)"},{"ICD10":"I20-I25","definition":"Ischaemic heart diseases"},{"ICD10":"I21_I22","definition":"Acute myocardial infarction including subsequent myocardial infarction"},{"ICD10":"I20_I23-I25","definition":"Other ischaemic heart diseases"},{"ICD10":"I30-I51","definition":"Other heart diseases"},{"ICD10":"I60-I69","definition":"Cerebrovascular diseases"},{"ICD10":"I_OTH","definition":"Other diseases of the circulatory system (remainder of I00-I99)"},{"ICD10":"J","definition":"Diseases of the respiratory system (J00-J99)"},{"ICD10":"J09-J11","definition":"Influenza (including swine flu)"},{"ICD10":"J12-J18","definition":"Pneumonia"},{"ICD10":"J40-J47","definition":"Chronic lower respiratory diseases"},{"ICD10":"J45_J46","definition":"Asthma and status asthmaticus"},{"ICD10":"J40-J44_J47","definition":"Other lower respiratory diseases"},{"ICD10":"J_OTH","definition":"Other diseases of the respiratory system (remainder of J00-J99)"},{"ICD10":"K","definition":"Diseases of the digestive system (K00-K93)"},{"ICD10":"K25-K28","definition":"Ulcer of stomach, duodenum and jejunum"},{"ICD10":"K70_K73_K74","definition":"Chronic liver disease"},{"ICD10":"K_OTH","definition":"Other diseases of the digestive system (remainder of K00-K93)"},{"ICD10":"L","definition":"Diseases of the skin and subcutaneous tissue (L00-L99)"},{"ICD10":"M","definition":"Diseases of the musculoskeletal system and connective tissue (M00-M99)"},{"ICD10":"RHEUM_ARTHRO","definition":"Rheumatoid arthritis and arthrosis (M05-M06,M15-M19)"},{"ICD10":"M_OTH","definition":"Other diseases of the musculoskeletal system and connective tissue (remainder of M00-M99)"},{"ICD10":"N","definition":"Diseases of the genitourinary system (N00-N99)"},{"ICD10":"N00-N29","definition":"Diseases of kidney and ureter"},{"ICD10":"N_OTH","definition":"Other diseases of the genitourinary system (remainder of N00-N99)"},{"ICD10":"O","definition":"Pregnancy, childbirth and the puerperium (O00-O99)"},{"ICD10":"P","definition":"Certain conditions originating in the perinatal period (P00-P96)"},{"ICD10":"Q","definition":"Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)"},{"ICD10":"R","definition":"Rheumatoid arthritis and arthrosis (M05-M06,M15-M19)"},{"ICD10":"R95","definition":"Sudden infant death syndrome"},{"ICD10":"R96-R99","definition":"Ill-defined and unknown causes of mortality"},{"ICD10":"R_OTH","definition":"Other symptoms, signs and abnormal clinical and laboratory findings (remainder of R00-R99)"},{"ICD10":"V01-Y89","definition":"External causes of morbidity and mortality (V01-Y89)"},{"ICD10":"ACC","definition":"Accidents (V01-X59, Y85, Y86)"},{"ICD10":"V_Y85","definition":"Transport accidents (V01-V99, Y85)"},{"ICD10":"W00-W19","definition":"Falls"},{"ICD10":"W65-W74","definition":"Accidental drowning and submersion"},{"ICD10":"X40-X49","definition":"Accidental poisoning by and exposure to noxious substances"},{"ICD10":"ACC_OTH","definition":"Other accidents (W20-W64, W75-X39, X50-X59, Y86)"},{"ICD10":"X60-X84_Y870","definition":"Intentional self-harm"},{"ICD10":"X85-Y09_Y871","definition":"Assault"},{"ICD10":"Y10-Y34_Y872","definition":"Event of undetermined intent"},{"ICD10":"V01-Y89_OTH","definition":"Other external causes of morbidity and mortality (remainder of V01-Y89)"}]';
var SDMX_DEMO_MENU = '{"A":["<li href=\\"0\\" data-cid=\\"0\\"><a href=\\"#\\" data-mid=\\"0\\">A-R_V-Y&nbsp;All causes of death (A00-Y89) excluding S00-T98<\/a><\/li>","<li href=\\"1\\" data-cid=\\"1\\"><a href=\\"#\\" data-mid=\\"0\\">A_B&nbsp;Certain infectious and parasitic diseases (A00-B99)<\/a><\/li>","<li href=\\"2\\" data-cid=\\"2\\"><a href=\\"#\\" data-mid=\\"0\\">A15-A19_B90&nbsp;Tuberculosis<\/a><\/li>","<li href=\\"5\\" data-cid=\\"5\\"><a href=\\"#\\" data-mid=\\"0\\">A_B_OTH&nbsp;Other infectious and parasitic diseases (remainder of A00-B99)<\/a><\/li>","<li href=\\"77\\" data-cid=\\"77\\"><a href=\\"#\\" data-mid=\\"0\\">ACC&nbsp;Accidents (V01-X59, Y85, Y86)<\/a><\/li>","<li href=\\"82\\" data-cid=\\"82\\"><a href=\\"#\\" data-mid=\\"0\\">ACC_OTH&nbsp;Other accidents (W20-W64, W75-X39, X50-X59, Y86)<\/a><\/li>"],"B":["<li href=\\"3\\" data-cid=\\"3\\"><a href=\\"#\\" data-mid=\\"0\\">B15-B19_B942&nbsp;Viral hepatitis and sequelae of viral hepatitis<\/a><\/li>","<li href=\\"4\\" data-cid=\\"4\\"><a href=\\"#\\" data-mid=\\"0\\">B20-B24&nbsp;Human immunodeficiency virus [HIV] disease<\/a><\/li>"],"C":["<li href=\\"6\\" data-cid=\\"6\\"><a href=\\"#\\" data-mid=\\"0\\">C00-D48&nbsp;Neoplasms<\/a><\/li>","<li href=\\"7\\" data-cid=\\"7\\"><a href=\\"#\\" data-mid=\\"0\\">C&nbsp;Neoplasms<\/a><\/li>","<li href=\\"8\\" data-cid=\\"8\\"><a href=\\"#\\" data-mid=\\"0\\">C00-C14&nbsp;Malignant neoplasm of lip, oral cavity, pharynx<\/a><\/li>","<li href=\\"9\\" data-cid=\\"9\\"><a href=\\"#\\" data-mid=\\"0\\">C15&nbsp;Malignant neoplasm of oesophagus<\/a><\/li>","<li href=\\"10\\" data-cid=\\"10\\"><a href=\\"#\\" data-mid=\\"0\\">C16&nbsp;Malignant neoplasm of stomach<\/a><\/li>","<li href=\\"11\\" data-cid=\\"11\\"><a href=\\"#\\" data-mid=\\"0\\">C18-C21&nbsp;Malignant neoplasm of colon, rectosigmoid junction, rectum, anus and anal canal<\/a><\/li>","<li href=\\"12\\" data-cid=\\"12\\"><a href=\\"#\\" data-mid=\\"0\\">C22&nbsp;Malignant neoplasm of liver and intrahepatic bile ducts<\/a><\/li>","<li href=\\"13\\" data-cid=\\"13\\"><a href=\\"#\\" data-mid=\\"0\\">C25&nbsp;Malignant neoplasm of pancreas<\/a><\/li>","<li href=\\"14\\" data-cid=\\"14\\"><a href=\\"#\\" data-mid=\\"0\\">C32&nbsp;Malignant neoplasm of larynx<\/a><\/li>","<li href=\\"15\\" data-cid=\\"15\\"><a href=\\"#\\" data-mid=\\"0\\">C33_C34&nbsp;Malignant neoplasm of trachea, bronchus and lung<\/a><\/li>","<li href=\\"16\\" data-cid=\\"16\\"><a href=\\"#\\" data-mid=\\"0\\">C43&nbsp;Malignant melanoma of skin<\/a><\/li>","<li href=\\"17\\" data-cid=\\"17\\"><a href=\\"#\\" data-mid=\\"0\\">C50&nbsp;Malignant neoplasm of breast<\/a><\/li>","<li href=\\"18\\" data-cid=\\"18\\"><a href=\\"#\\" data-mid=\\"0\\">C53&nbsp;Malignant neoplasm of cervix uteri<\/a><\/li>","<li href=\\"19\\" data-cid=\\"19\\"><a href=\\"#\\" data-mid=\\"0\\">C54_C55&nbsp;Malignant neoplasm of other parts of uterus<\/a><\/li>","<li href=\\"20\\" data-cid=\\"20\\"><a href=\\"#\\" data-mid=\\"0\\">C56&nbsp;Malignant neoplasm of ovary<\/a><\/li>","<li href=\\"21\\" data-cid=\\"21\\"><a href=\\"#\\" data-mid=\\"0\\">C61&nbsp;Malignant neoplasm of prostate<\/a><\/li>","<li href=\\"22\\" data-cid=\\"22\\"><a href=\\"#\\" data-mid=\\"0\\">C64&nbsp;Malignant neoplasm of kidney, except renal pelvis<\/a><\/li>","<li href=\\"23\\" data-cid=\\"23\\"><a href=\\"#\\" data-mid=\\"0\\">C67&nbsp;Malignant neoplasm of bladder<\/a><\/li>","<li href=\\"24\\" data-cid=\\"24\\"><a href=\\"#\\" data-mid=\\"0\\">C70-C72&nbsp;Malignant neoplasm of brain and central nervous system<\/a><\/li>","<li href=\\"25\\" data-cid=\\"25\\"><a href=\\"#\\" data-mid=\\"0\\">C73&nbsp;Malignant neoplasm of thyroid gland<\/a><\/li>","<li href=\\"26\\" data-cid=\\"26\\"><a href=\\"#\\" data-mid=\\"0\\">C81-C85&nbsp;Hodgkin disease and lymphomas<\/a><\/li>","<li href=\\"27\\" data-cid=\\"27\\"><a href=\\"#\\" data-mid=\\"0\\">C91-C95&nbsp;Leukaemia<\/a><\/li>","<li href=\\"28\\" data-cid=\\"28\\"><a href=\\"#\\" data-mid=\\"0\\">C88_C90_C96&nbsp;Other malignant neoplasm of lymphoid, haematopoietic and related tissue<\/a><\/li>","<li href=\\"29\\" data-cid=\\"29\\"><a href=\\"#\\" data-mid=\\"0\\">C_OTH&nbsp;Other malignant neoplasms (remainder of C00-C97)<\/a><\/li>"],"D":["<li href=\\"30\\" data-cid=\\"30\\"><a href=\\"#\\" data-mid=\\"0\\">D00-D48&nbsp;Non-malignant neoplasms (benign and uncertain)<\/a><\/li>","<li href=\\"31\\" data-cid=\\"31\\"><a href=\\"#\\" data-mid=\\"0\\">D50-D89&nbsp;Diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism<\/a><\/li>"],"E":["<li href=\\"32\\" data-cid=\\"32\\"><a href=\\"#\\" data-mid=\\"0\\">E&nbsp;Endocrine, nutritional and metabolic diseases (E00-E90)<\/a><\/li>","<li href=\\"33\\" data-cid=\\"33\\"><a href=\\"#\\" data-mid=\\"0\\">E10-E14&nbsp;Diabetes mellitus<\/a><\/li>","<li href=\\"34\\" data-cid=\\"34\\"><a href=\\"#\\" data-mid=\\"0\\">E_OTH&nbsp;Other endocrine, nutritional and metabolic diseases (remainder of E00-E90)<\/a><\/li>"],"F":["<li href=\\"35\\" data-cid=\\"35\\"><a href=\\"#\\" data-mid=\\"0\\">F&nbsp;Mental and behavioural disorders (F00-F99)<\/a><\/li>","<li href=\\"36\\" data-cid=\\"36\\"><a href=\\"#\\" data-mid=\\"0\\">F01_F03&nbsp;Dementia<\/a><\/li>","<li href=\\"37\\" data-cid=\\"37\\"><a href=\\"#\\" data-mid=\\"0\\">F10&nbsp;Mental and behavioural disorders due to use of alcohol<\/a><\/li>","<li href=\\"39\\" data-cid=\\"39\\"><a href=\\"#\\" data-mid=\\"0\\">F_OTH&nbsp;Other mental and behavioural disorders (remainder of F00-F99)<\/a><\/li>"],"T":["<li href=\\"38\\" data-cid=\\"38\\"><a href=\\"#\\" data-mid=\\"0\\">TOXICO&nbsp;Drug dependence, toxicomania (F11-F16, F18-F19)<\/a><\/li>"],"G":["<li href=\\"40\\" data-cid=\\"40\\"><a href=\\"#\\" data-mid=\\"0\\">G_H&nbsp;Diseases of the nervous system and the sense organs (G00-H95)<\/a><\/li>","<li href=\\"41\\" data-cid=\\"41\\"><a href=\\"#\\" data-mid=\\"0\\">G20&nbsp;Parkinson disease<\/a><\/li>","<li href=\\"42\\" data-cid=\\"42\\"><a href=\\"#\\" data-mid=\\"0\\">G30&nbsp;Alzheimer disease<\/a><\/li>","<li href=\\"43\\" data-cid=\\"43\\"><a href=\\"#\\" data-mid=\\"0\\">G_H_OTH&nbsp;Other diseases of the nervous system and the sense organs (remainder of G00-H95)<\/a><\/li>"],"I":["<li href=\\"44\\" data-cid=\\"44\\"><a href=\\"#\\" data-mid=\\"0\\">I&nbsp;Diseases of the circulatory system (I00-I99)<\/a><\/li>","<li href=\\"45\\" data-cid=\\"45\\"><a href=\\"#\\" data-mid=\\"0\\">I20-I25&nbsp;Ischaemic heart diseases<\/a><\/li>","<li href=\\"46\\" data-cid=\\"46\\"><a href=\\"#\\" data-mid=\\"0\\">I21_I22&nbsp;Acute myocardial infarction including subsequent myocardial infarction<\/a><\/li>","<li href=\\"47\\" data-cid=\\"47\\"><a href=\\"#\\" data-mid=\\"0\\">I20_I23-I25&nbsp;Other ischaemic heart diseases<\/a><\/li>","<li href=\\"48\\" data-cid=\\"48\\"><a href=\\"#\\" data-mid=\\"0\\">I30-I51&nbsp;Other heart diseases<\/a><\/li>","<li href=\\"49\\" data-cid=\\"49\\"><a href=\\"#\\" data-mid=\\"0\\">I60-I69&nbsp;Cerebrovascular diseases<\/a><\/li>","<li href=\\"50\\" data-cid=\\"50\\"><a href=\\"#\\" data-mid=\\"0\\">I_OTH&nbsp;Other diseases of the circulatory system (remainder of I00-I99)<\/a><\/li>"],"J":["<li href=\\"51\\" data-cid=\\"51\\"><a href=\\"#\\" data-mid=\\"0\\">J&nbsp;Diseases of the respiratory system (J00-J99)<\/a><\/li>","<li href=\\"52\\" data-cid=\\"52\\"><a href=\\"#\\" data-mid=\\"0\\">J09-J11&nbsp;Influenza (including swine flu)<\/a><\/li>","<li href=\\"53\\" data-cid=\\"53\\"><a href=\\"#\\" data-mid=\\"0\\">J12-J18&nbsp;Pneumonia<\/a><\/li>","<li href=\\"54\\" data-cid=\\"54\\"><a href=\\"#\\" data-mid=\\"0\\">J40-J47&nbsp;Chronic lower respiratory diseases<\/a><\/li>","<li href=\\"55\\" data-cid=\\"55\\"><a href=\\"#\\" data-mid=\\"0\\">J45_J46&nbsp;Asthma and status asthmaticus<\/a><\/li>","<li href=\\"56\\" data-cid=\\"56\\"><a href=\\"#\\" data-mid=\\"0\\">J40-J44_J47&nbsp;Other lower respiratory diseases<\/a><\/li>","<li href=\\"57\\" data-cid=\\"57\\"><a href=\\"#\\" data-mid=\\"0\\">J_OTH&nbsp;Other diseases of the respiratory system (remainder of J00-J99)<\/a><\/li>"],"K":["<li href=\\"58\\" data-cid=\\"58\\"><a href=\\"#\\" data-mid=\\"0\\">K&nbsp;Diseases of the digestive system (K00-K93)<\/a><\/li>","<li href=\\"59\\" data-cid=\\"59\\"><a href=\\"#\\" data-mid=\\"0\\">K25-K28&nbsp;Ulcer of stomach, duodenum and jejunum<\/a><\/li>","<li href=\\"60\\" data-cid=\\"60\\"><a href=\\"#\\" data-mid=\\"0\\">K70_K73_K74&nbsp;Chronic liver disease<\/a><\/li>","<li href=\\"61\\" data-cid=\\"61\\"><a href=\\"#\\" data-mid=\\"0\\">K_OTH&nbsp;Other diseases of the digestive system (remainder of K00-K93)<\/a><\/li>"],"L":["<li href=\\"62\\" data-cid=\\"62\\"><a href=\\"#\\" data-mid=\\"0\\">L&nbsp;Diseases of the skin and subcutaneous tissue (L00-L99)<\/a><\/li>"],"M":["<li href=\\"63\\" data-cid=\\"63\\"><a href=\\"#\\" data-mid=\\"0\\">M&nbsp;Diseases of the musculoskeletal system and connective tissue (M00-M99)<\/a><\/li>","<li href=\\"65\\" data-cid=\\"65\\"><a href=\\"#\\" data-mid=\\"0\\">M_OTH&nbsp;Other diseases of the musculoskeletal system and connective tissue (remainder of M00-M99)<\/a><\/li>"],"R":["<li href=\\"64\\" data-cid=\\"64\\"><a href=\\"#\\" data-mid=\\"0\\">RHEUM_ARTHRO&nbsp;Rheumatoid arthritis and arthrosis (M05-M06,M15-M19)<\/a><\/li>","<li href=\\"72\\" data-cid=\\"72\\"><a href=\\"#\\" data-mid=\\"0\\">R&nbsp;Rheumatoid arthritis and arthrosis (M05-M06,M15-M19)<\/a><\/li>","<li href=\\"73\\" data-cid=\\"73\\"><a href=\\"#\\" data-mid=\\"0\\">R95&nbsp;Sudden infant death syndrome<\/a><\/li>","<li href=\\"74\\" data-cid=\\"74\\"><a href=\\"#\\" data-mid=\\"0\\">R96-R99&nbsp;Ill-defined and unknown causes of mortality<\/a><\/li>","<li href=\\"75\\" data-cid=\\"75\\"><a href=\\"#\\" data-mid=\\"0\\">R_OTH&nbsp;Other symptoms, signs and abnormal clinical and laboratory findings (remainder of R00-R99)<\/a><\/li>"],"N":["<li href=\\"66\\" data-cid=\\"66\\"><a href=\\"#\\" data-mid=\\"0\\">N&nbsp;Diseases of the genitourinary system (N00-N99)<\/a><\/li>","<li href=\\"67\\" data-cid=\\"67\\"><a href=\\"#\\" data-mid=\\"0\\">N00-N29&nbsp;Diseases of kidney and ureter<\/a><\/li>","<li href=\\"68\\" data-cid=\\"68\\"><a href=\\"#\\" data-mid=\\"0\\">N_OTH&nbsp;Other diseases of the genitourinary system (remainder of N00-N99)<\/a><\/li>"],"O":["<li href=\\"69\\" data-cid=\\"69\\"><a href=\\"#\\" data-mid=\\"0\\">O&nbsp;Pregnancy, childbirth and the puerperium (O00-O99)<\/a><\/li>"],"P":["<li href=\\"70\\" data-cid=\\"70\\"><a href=\\"#\\" data-mid=\\"0\\">P&nbsp;Certain conditions originating in the perinatal period (P00-P96)<\/a><\/li>"],"Q":["<li href=\\"71\\" data-cid=\\"71\\"><a href=\\"#\\" data-mid=\\"0\\">Q&nbsp;Congenital malformations, deformations and chromosomal abnormalities (Q00-Q99)<\/a><\/li>"],"V":["<li href=\\"76\\" data-cid=\\"76\\"><a href=\\"#\\" data-mid=\\"0\\">V01-Y89&nbsp;External causes of morbidity and mortality (V01-Y89)<\/a><\/li>","<li href=\\"78\\" data-cid=\\"78\\"><a href=\\"#\\" data-mid=\\"0\\">V_Y85&nbsp;Transport accidents (V01-V99, Y85)<\/a><\/li>","<li href=\\"86\\" data-cid=\\"86\\"><a href=\\"#\\" data-mid=\\"0\\">V01-Y89_OTH&nbsp;Other external causes of morbidity and mortality (remainder of V01-Y89)<\/a><\/li>"],"W":["<li href=\\"79\\" data-cid=\\"79\\"><a href=\\"#\\" data-mid=\\"0\\">W00-W19&nbsp;Falls<\/a><\/li>","<li href=\\"80\\" data-cid=\\"80\\"><a href=\\"#\\" data-mid=\\"0\\">W65-W74&nbsp;Accidental drowning and submersion<\/a><\/li>"],"X":["<li href=\\"81\\" data-cid=\\"81\\"><a href=\\"#\\" data-mid=\\"0\\">X40-X49&nbsp;Accidental poisoning by and exposure to noxious substances<\/a><\/li>","<li href=\\"83\\" data-cid=\\"83\\"><a href=\\"#\\" data-mid=\\"0\\">X60-X84_Y870&nbsp;Intentional self-harm<\/a><\/li>","<li href=\\"84\\" data-cid=\\"84\\"><a href=\\"#\\" data-mid=\\"0\\">X85-Y09_Y871&nbsp;Assault<\/a><\/li>"],"Y":["<li href=\\"85\\" data-cid=\\"85\\"><a href=\\"#\\" data-mid=\\"0\\">Y10-Y34_Y872&nbsp;Event of undetermined intent<\/a><\/li>"]}';

// var ODATA_DEMO_DATA = '[{"ICD10":"80142ned","definition":"Overledenen; doodsoorzaak (4 hoofdgroepen)", "url":"http%3A%2F%2Fopendata.cbs.nl%2FODataApi%2Fodata%2F80142ned%2FTypedDataSet%3F%24filter%3DPerioden%20eq%20%272014JJ00%27"}]'
var ODATA_DEMO_DATA = '[{"ICD10":"80142ned","definition":"Overledenen; doodsoorzaak (4 hoofdgroepen)", "url":"http://opendata.cbs.nl/ODataApi/odata/80142ned/TypedDataSet?$filter=Perioden eq \'2012JJ00\'"},{"ICD10": "82931ned", "definition": "Aantal geboorten relatief (2014 - Wijken)", "url":"http://opendata.cbs.nl/ODataApi/odata/82931ned/TypedDataSet?$select=WijkenEnBuurten,GeboorteRelatief_24&$filter=(substringof(\'WK\',WijkenEnBuurten))&$top=10000"}]'

var ODATA_DEMO_MENU = '{"O":["<li href=\\"0\\" data-cid=\\"0\\"><a href=\\"#\\" data-mid=\\"0\\">80142ned&nbsp;Overledenen; doodsoorzaak (4 hoofdgroepen)<\/a><\/li>"], "G":["<li href=\\"1\\" data-cid=\\"1\\"><a href=\\"#\\" data-mid=\\"1\\">82931ned&nbsp;Aantal geboorten relatief (2014 - Wijken)<\/a><\/li>"], "Custom": ["<li href=\\"2\\" data-cid=\\"2\\"><a href=\\"#\\" data-mid=\\"2\\">Custom URL<\/a><\/li>"]}'

var tjsdata = ODATA_DEMO_DATA;
var tjsmenu = ODATA_DEMO_MENU;

var stage={};
stage.tjsBasename='tjs.test.pdok.nl';
var theLayout;
var map;
var geocoder;
/** @constructor */
stage.stageinfo=function(point, map, divHTML) {
	this.point_ = point;
	this.map_ = map;
	this.div_ = divHTML;
	this.setMap(map);
}

stage.separator=",";
stage.decimal=".";
stage.overlays=[];
stage.aliases=[];
stage.iframe=false;
stage.auto_zoom=false;

stage.initStageInfoWindow=function()
{
	stage.stageinfo.prototype = new google.maps.OverlayView();
	stage.stageinfo.prototype.onAdd = function()
	{
		var div = $(this.div_)[0];
		div.style.position = 'absolute';

		this.div_ = div;

		var panes = this.getPanes();
		panes.overlayLayer.appendChild(div);
	}

	stage.stageinfo.prototype.hide = function()
	{
		$(this.div_).hide();
	}

	stage.stageinfo.prototype.show = function()
	{
		$(this.div_).show();
	}

	stage.stageinfo.prototype.setPosition=function(pos)
	{
		this.point_=pos;
		this.draw();
	}

	stage.stageinfo.prototype.setText=function(text)
	{
		$(this.div_).html(text);
	}

	stage.stageinfo.prototype.draw = function()
	{
		var overlayProjection = this.getProjection();
		if (overlayProjection === undefined) return;
		var pp = overlayProjection.fromLatLngToDivPixel(this.point_);
		var div = this.div_;
		div.style.left = pp.x + 'px';
		div.style.top = pp.y + 'px';
	}

	stage.stageinfo.prototype.onRemove = function()
	{
		this.div_.parentNode.removeChild(this.div_);
		this.div_ = null;
	}
}

var initialResolution = 2 * Math.PI * 6378137 / 256;
var originShift = 2 * Math.PI * 6378137 / 2.0;

stage.tileUrl=function(coord,zoom)
{
	var proj = map.getProjection();
	var zfactor = 256 / (1 << zoom);
	var ul = proj.fromPointToLatLng(new google.maps.Point(coord.x * zfactor, coord.y * zfactor));
	var lr = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * zfactor, (coord.y + 1) * zfactor));
	var bbox = ul.lng() + "," + lr.lat() + "," + lr.lng() + "," + ul.lat();

	var style="tjs_color";
	var url = "http://"+stage.tjsBasename+"/geoserver/tjs?service=WMS&version=1.1.0&request=GetMap&styles="+style+"&width=256&height=256&srs=EPSG:4326&format=image%2Fpng";
	url += "&layers=__temp:"+stage.layerTable;
	url += "&format_options=antialias:none";
	url += "&bbox=" + bbox;
	return url;
}

function LevelMapType(tileSize)
{
  this.tileSize = tileSize;
  this.cache=[];
  this.opacity=1.0;
}
stage.select_feature=function(id,add)
{
	var selectedGroup=stage.groups[stage.selectedGroupInx];
	selectedGroup.updated=false;
	stage.set_tile_cache('selection_updated','false');
	var ids=selectedGroup.ids;
	if (ids===undefined) ids=selectedGroup.ids=[];

	var op=0;
	if (add)
	{
		op=255;
		ids[id]=true;
	}
	else
	{
		delete ids[id];
	}

	stage.drawChart(ids);

	var zoom=map.getZoom();
	var a=stage.the_overlay.cache[zoom];
	if (a===undefined) return;
	var bounds=stage.getMapBounds();

	var bounds=stage.getMapBounds(zoom);
	var minX = bounds[0];
	var minY = bounds[1];
    var maxX = bounds[2];
	var maxY = bounds[3];

	id=parseInt(id);
	var rgb_id=intToRGB(id);
	var cx0=rgb_id[0];
	var cx1=rgb_id[1];
	var cx2=rgb_id[2];

	for (var x=minX;x<=maxX;++x)
	{
		if (a[x]!==undefined)
		{
			for (var y=minY;y<=maxY;++y)
			{
				var tile=a[x][y];
				if (tile!==undefined)
				{
					var data=tile.f;
					var N=data.length;
					var overlay_canvas = tile.d.children[1];
					var imageData;
					var ctx;
					if (overlay_canvas===undefined)
					{
						overlay_canvas=document.createElement('canvas');
						overlay_canvas.width=overlay_canvas.height=256;
						overlay_canvas.style.position='absolute';
						tile.d.children[0].style.position='absolute';
						ctx=overlay_canvas.getContext('2d');
						imageData = ctx.createImageData(256, 256);
					}
					else
					{
						ctx=overlay_canvas.getContext('2d');
						imageData = ctx.getImageData(0,0,256,256);
					}

					var pixels=imageData.data;

					for (var i = 0; i < N; i=i+4)
					{
					   if (data[i+3]==255 && data[i]==cx0 && data[i+1]==cx1 && data[i+2]==cx2)
					   {
							pixels[i]=255;pixels[i+1]=255;pixels[i+2]=0;pixels[i+3]=op;
					   }
					}
					ctx.putImageData(imageData, 0, 0);
					if (tile.d.children.length==1) tile.d.appendChild(overlay_canvas);
				}
			}
		}
	}
}

stage.clear_selection=function()
{
	var zoom=map.getZoom();
	var a=stage.the_overlay.cache[zoom];
	if (a===undefined) return;
	var bounds=stage.getMapBounds();

	var bounds=stage.getMapBounds(zoom);
	var minX = bounds[0];
	var minY = bounds[1];
	var maxX = bounds[2];
	var maxY = bounds[3];

	for (var x=minX;x<=maxX;++x)
	{
		if (a[x]!==undefined)
		{
			for (var y=minY;y<=maxY;++y)
			{
				var tile=a[x][y];
				if (tile!==undefined)
				{
					var overlay_canvas = tile.d.children[1];
					if (overlay_canvas!==undefined) overlay_canvas.getContext('2d').clearRect(0,0,256,256);
				}
			}
		}
	}
}

stage.selection2div=function(tile)
{
	if (stage.selectedGroupInx==null) return;
	if (stage.groups[stage.selectedGroupInx].levelDatum!==stage.selectedLevelDatum) return;
	if (tile.selection_updated===undefined) tile.selection_updated=false;
	if (tile.selection_updated==true) return;

	var ids=stage.groups[stage.selectedGroupInx].ids;
	if (ids.length==0) return;

	if (tile!==undefined)
	{
		var data=tile.f;
		var N=data.length;
		var overlay_canvas = tile.d.children[1];
		var imageData;
		var ctx;
		if (overlay_canvas===undefined)
		{
			overlay_canvas=document.createElement('canvas');
			overlay_canvas.width=overlay_canvas.height=256;
			overlay_canvas.style.position='absolute';
			tile.d.children[0].style.position='absolute';
		}

		ctx=overlay_canvas.getContext('2d');
		imageData = ctx.createImageData(256, 256);

		var pixels=imageData.data;

		for (var i = 0; i < N; i=i+4)
		{
			var fi=rgbToInt(data[i],data[i+1],data[i+2]);
			if (ids[fi]!==undefined)
			{
				pixels[i]=255;pixels[i+1]=255;pixels[i+2]=0;pixels[i+3]=255;
			}
		}
		ctx.putImageData(imageData, 0, 0);
		if (tile.d.children.length==1) tile.d.appendChild(overlay_canvas);
		tile.selection_updated=true;
	}
}

stage.set_tile_cache=function(key,value)
{
	var a=stage.the_overlay.cache;
	for (var zi in a)
	{
		var z=a[zi];
		for (var xi in z)
		{
			var x=z[xi];
			for (var yi in x) x[yi][key]=value;
		}
	}
}

stage.select_features=function(ids)
{
	if (ids.length==0)
	{
		stage.clear_selection();
		stage.drawChart(ids);
		return;
	}

	var selectedGroup=stage.groups[stage.selectedGroupInx];

	selectedGroup.updated=false;
	stage.set_tile_cache('selection_updated','false');
	stage.drawChart(ids);
	var zoom=map.getZoom();
	var a=stage.the_overlay.cache[zoom];
	if (a===undefined) return;
	var bounds=stage.getMapBounds();

	var bounds=stage.getMapBounds(zoom);
	var minX = bounds[0];
	var minY = bounds[1];
	var maxX = bounds[2];
	var maxY = bounds[3];

	for (var x=minX;x<=maxX;++x)
	{
		if (a[x]!==undefined)
		{
			for (var y=minY;y<=maxY;++y)
			{
				var tile=a[x][y];
				if (tile!==undefined)
				{
					var data=tile.f;
					var N=data.length;
					var overlay_canvas = tile.d.children[1];
					var imageData;
					var ctx;
					if (overlay_canvas===undefined)
					{
						overlay_canvas=document.createElement('canvas');
						overlay_canvas.width=overlay_canvas.height=256;
						overlay_canvas.style.position='absolute';
						tile.d.children[0].style.position='absolute';
					}

					ctx=overlay_canvas.getContext('2d');
					imageData = ctx.createImageData(256, 256);

					var pixels=imageData.data;

					for (var i = 0; i < N; i=i+4)
					{
						var fi=rgbToInt(data[i],data[i+1],data[i+2]);
						if (ids[fi]!==undefined)
						{
							pixels[i]=255;pixels[i+1]=255;pixels[i+2]=0;pixels[i+3]=255;
						}
					}
					ctx.putImageData(imageData, 0, 0);
					if (tile.d.children.length==1) tile.d.appendChild(overlay_canvas);
				}
			}
		}
	}
}

stage.data_tile=function (ctx,features)
{
	var imageData = ctx.createImageData(256, 256);
	var N=256*256*4
	var pixels=imageData.data;
	var lngth=stage.cba.length;

	for (var i = 0; i < N; i=i+4)
	{
		if (features[i]>250 && features[i+1]==0) { pixels[i]=84;pixels[i+1]=84;pixels[i+2]=84;pixels[i+3]=255;}
			else
		{
			var fi=rgbToInt(features[i],features[i+1],features[i+2]);
			if (fi<16777215)
			{
				var value=stage.variableValues[fi];
				var ki=0;
				var color=null;
				if (value>=stage.cba[0])
				{
					for (var k=1;k<lngth;k=k+2)
					{
						if (value<=stage.cba[k])
						{
							color=stage.cbac[ki];
							break;
						}
						ki++;
					}
				}

				if (color==null)
				{
					var sv=stage.specialValues[value];
					if (sv!==undefined)
					{
						color=sv.c;
						if (sv['added']===undefined)
						{
							var append=true;
							for (var svi in stage.specialValues)
							{
								var svx=stage.specialValues[svi];
								if (svx['added']!==undefined && svx.t==sv.t) {
									append=false;
									break;
								}
							}
							if (append) stage.addSpecialColorDiv(tinycolor(color).toHexString(),sv.t,value);
							sv['added']=true;
						}
					}
				}

				if (color!=null){ pixels[i]=color.r;pixels[i+1]=color.g;pixels[i+2]=color.b;pixels[i+3]=255;}
			}
		}
	}
	ctx.putImageData(imageData, 0, 0); // at coords 0,0
}

stage.export2png=function()
{

	if (stage.png_settings===undefined)
	{
		$.get(stage.host+"index.php?r=site/pngSettings",function(data)
		{
			stage.png_settings=jQuery.parseJSON(data);
			stage.the_overlay.export2png();
		});
	}
	else
	{
		stage.the_overlay.export2png();
	}
}

stage.get_snd=function()
{
	var snd="";
	var cache=stage.getVariableCache();
	if (cache==null) return snd;
	return cache.snd;
}

LevelMapType.prototype.export2png=function(o)
{
	var snd=stage.get_snd();
	var head_text=(snd==""?stage.selectedVariableDescription:snd)+", "+$('#level-datum').find(".active").text();
	var legend_s_text='Vrednost za Slovenijo: '+$('#slo').text();
	var legend_n_text=$('#variable-comments').text();
	var footnote_text=stage.png_settings.footnote;

	var bounds=stage.getMapBounds(map.getZoom());
	var minX = bounds[0];
	var minY = bounds[1];
	var maxX = bounds[2];
	var maxY = bounds[3]+1;

	var h=(maxY-minY)*256+parseInt(stage.png_settings.phh)+parseInt(stage.png_settings.pfh)+1;
	var w=(maxX-minX)*256+parseInt(stage.png_settings.plw);
	var lph=(maxY-minY)*256;

	var canvas = document.createElement('canvas');
	canvas.width=w;
	canvas.height=h;

	var head=document.createElement('canvas');
	head.width=w;
	head.height=parseInt(stage.png_settings.phh);

	var map_canvas=document.createElement('canvas');
	map_canvas.width=256*(maxX-minX);
	map_canvas.height=256*(maxY-minY);

	var left_pane=document.createElement('canvas');
	left_pane.width=parseInt(stage.png_settings.plw);
	left_pane.height=lph;

	var image=document.createElement('canvas');
	image.width=left_pane.width;
	image.height=lph;

	var legend=document.createElement('canvas');
	legend.width=parseInt(stage.png_settings.plw);
	legend.height=h;

	var footer=document.createElement('canvas');
	footer.width=w;
	footer.height=parseInt(stage.png_settings.pfh);

	var ctx = canvas.getContext("2d");
	var htx=head.getContext("2d");
	var ltx=left_pane.getContext("2d");
	var mtx=map_canvas.getContext("2d");
	var itx=image.getContext("2d");
	var letx=legend.getContext("2d");
	var ftx=footer.getContext("2d");

	ctx.fillStyle="white";
	ctx.fillRect(0,0,w,h);

	htx.fillStyle=stage.png_settings.phbc;
	htx.fillRect(0,0,head.width,head.height);
	htx.strokeStyle = stage.png_settings.pbc;
	htx.strokeRect(0,0,head.width,head.height);

	ltx.fillStyle=stage.png_settings.plbc;
	ltx.fillRect(0,0,left_pane.width,left_pane.height);
	ltx.strokeStyle=stage.png_settings.pbc;
	ltx.beginPath();
	ltx.moveTo(0, 0);
	ltx.lineTo(0,left_pane.height);
	ltx.moveTo(left_pane.width, 0);
	ltx.lineTo(left_pane.width,left_pane.height);
	ltx.stroke();

	mtx.strokeStyle=stage.png_settings.pbc;
	mtx.beginPath();
	mtx.moveTo(map_canvas.width, 0);
	mtx.lineTo(map_canvas.width,map_canvas.height);
	mtx.stroke();

	ftx.fillStyle=stage.png_settings.pfbc;
	ftx.fillRect(0,0,footer.width,footer.height);
	ftx.strokeStyle=stage.png_settings.pbc;
	ftx.strokeRect(0,0,footer.width,footer.height);

	var legend_height=stage.drawLegend(letx);
	stage.drawText(htx,stage.png_settings.phtc,stage.png_settings.phf,stage.png_settings.pha,'top',head_text,parseInt(stage.png_settings.phtx),parseInt(stage.png_settings.phty));
	stage.drawText(ltx,stage.png_settings.plstc,stage.png_settings.plsf,stage.png_settings.plsa,'top',legend_s_text,parseInt(stage.png_settings.plstx),parseInt(stage.png_settings.plsty)+parseInt(legend_height)+parseInt(stage.png_settings.pllty)+100);
	stage.wrapText(ltx,stage.png_settings.plntc,stage.png_settings.plnf,stage.png_settings.plna,'top',legend_n_text,parseInt(stage.png_settings.plntx),parseInt(stage.png_settings.plnty)+parseInt(stage.png_settings.plsty)+parseInt(legend_height)+parseInt(stage.png_settings.pllty)+100,Math.floor(parseInt(stage.png_settings.plw)*0.9));
	stage.drawText(ftx,stage.png_settings.pfttc,stage.png_settings.pff,stage.png_settings.pfa,'top',footnote_text,parseInt(stage.png_settings.pfttx),parseInt(stage.png_settings.pftty));
	stage.drawMap(mtx,minX,minY,maxX,maxY,this.cache[map.getZoom()]);
	stage.drawImage(itx,function(img){
		ltx.drawImage(image,0,0,img.width,img.height,stage.png_settings.pix,stage.png_settings.piy,img.width,img.height);
		ltx.drawImage(legend,0,0,left_pane.width,legend_height,stage.png_settings.plltx,parseInt(img.height)+parseInt(stage.png_settings.pllty),left_pane.width,legend_height);
		ctx.drawImage(head,0,0);
		ctx.drawImage(map_canvas,left_pane.width,head.height);
		ctx.drawImage(left_pane,0,parseInt(stage.png_settings.phh));
		ctx.drawImage(footer,0,parseInt(stage.png_settings.phh)+lph);
		$('#modal-body').append('<img src="'+canvas.toDataURL()+'">');
	});
}

stage.drawImage=function(context,onFinished)
{
	var imageObj = new Image();
	imageObj.onload = function() {
		context.drawImage(imageObj, 0, 0);
		onFinished(imageObj);
	};
	imageObj.src = stage.host+"admin?r=general/getLogo";
}

stage.drawMap=function(context,minX,minY,maxX,maxY,a)
{
	if (a===undefined) return;

	for (var x=minX;x<=maxX;++x)
	{
		if (a[x]!==undefined)
		{
			for (var y=minY;y<=maxY;++y)
			{
				var tile=a[x][y];
				if (tile!==undefined)
					context.drawImage(tile.d.firstChild, (x-minX)*256, (y-minY)*256);
			}
		}
	}
}

stage.drawLegend=function(context)
{
	context.textBaseline='top';
	context.font = stage.png_settings.pllf;
	var px=stage.png_settings.pllf.match(/\d+(px|%)?/);
	px=parseInt((px[0]).replace('px',''));
	var lineHeight = px*1.33;
	var ysize=lineHeight*$('#legend .legendText').length;
	var y=0;
	var i=0;

	$('#legend .legendText').each(function()
	{
	      var color=stage.colors[i];
	      if (color[0]!=='#') color='#'+color;
	      context.fillStyle=color;
	      context.fillRect(0,y,20,px);
	      context.fillStyle=stage.png_settings.plltc;
	      context.fillText($(this).text(),25,y);
	      y=y+lineHeight;
	      i++;
	});

	return ysize;
}

stage.drawText=function(context,fillStyle,font,textAlign,textBaseline,text,x,y)
{
	context.fillStyle=fillStyle;
	context.font = font;
	context.textAlign = textAlign;
	context.textBaseline = textBaseline;
	context.fillText(text,x,y);
}


stage.wrapText=function(context,fillStyle,font,textAlign,textBaseline,text,x,y,maxWidth)
{
	var words = text.split(' ');
	var line = '';
	var px=font.match(/\d+(px|%)?/);
	var lineHeight = parseInt((px[0]).replace('px',''));

	context.fillStyle=fillStyle;
	context.font = font;
	context.textAlign = textAlign;
	context.textBaseline = textBaseline;

	for(var n = 0; n < words.length; n++)
	{
		var testLine = line + words[n] + ' ';
		var metrics = context.measureText(testLine);
		var testWidth = metrics.width;
		if (testWidth > maxWidth && n > 0)
		{
			context.fillText(line, x, y);
			line = words[n] + ' ';
			y += lineHeight;
		}
		else
		{
			line = testLine;
		}
	}
	context.fillText(line, x, y);
}

stage.getMapBounds=function(zoom)
{
	var bounds=map.getBounds();
	var proj=map.getProjection();

	var sw=fromLatLngToTile(proj,zoom,bounds.getSouthWest());
	var ne=fromLatLngToTile(proj,zoom,bounds.getNorthEast());

    return [sw.x,ne.y,ne.x,sw.y];
}

LevelMapType.prototype.setOpacity=function(o)
{
	this.opacity=o;

	var zoom=map.getZoom();
	var a=this.cache[zoom];
	if (a===undefined) return;

	var bounds=stage.getMapBounds(zoom);
	var minX = bounds[0];
	var minY = bounds[1];
    var maxX = bounds[2];
	var maxY = bounds[3];

	for (var x=minX;x<=maxX;++x)
	{
		if (a[x]!==undefined)
		{
			for (var y=minY;y<=maxY;++y)
			{
				var tile=a[x][y];
				if (tile!==undefined) tile.d.style.opacity=o;
			}
		}
	}
}

LevelMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
	if (this.cache[zoom]===undefined) this.cache[zoom]=[];
	if (this.cache[zoom][coord.x]===undefined) this.cache[zoom][coord.x]=[];
	var cache=this.cache[zoom][coord.x][coord.y];
	if (cache!==undefined && !cache.r){
		cache.d.style.opacity=this.opacity;
		if (stage.drawingManager.getMap()!= null) stage.selection2div(cache);
		return cache.d;
	}

	var div=ownerDocument.createElement('div');
	div.style.opacity=this.opacity;

	div.style.width = this.tileSize.width + 'px';
	div.style.height = this.tileSize.height + 'px';

	var canvas = ownerDocument.createElement('canvas');
	canvas.width=canvas.height=256;
	var ctx=canvas.getContext('2d');

	var img = new Image;
	img.crossOrigin = "Anonymous";
	if (cache===undefined)
	{
		img.onload = function()
		{
			ctx.drawImage(img,0,0);
			cache.f=ctx.getImageData(0,0,256,256).data;
			stage.data_tile(ctx,cache.f);
			div.appendChild(canvas);
			if (stage.drawingManager.getMap()!= null) stage.selection2div(cache);
		}
		cache={d:div}
		this.cache[zoom][coord.x][coord.y]=cache;
		img.src = stage.tileUrl(coord,zoom);
	}
	else
	{
		stage.data_tile(ctx,cache.f);
		div.appendChild(canvas);
		cache.d=div;
		if (stage.drawingManager.getMap()!= null) stage.selection2div(cache);
	}

	cache.r=false;
	return div;
};

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgbToInt(r, g, b) {
    return (r << 16) + (g << 8) + b;
}

function intToRGB(n){
    return [(n >> 16) & 0xff,(n >> 8) & 0xff,(n >> 0) & 0xff];
}

stage.onZoomChanged=function()
{
	var zoom=map.getZoom();
	if (stage.auto_zoom)
	{
		var azooms=stage.azooms;

		for (var lid in azooms)
		{
			var zd=azooms[lid];
			if (zd[0]<=zoom && zoom<=zd[1] && lid!=stage.selectedLevelId)
			{
				$('#level-menu').find("li[href='"+lid+"'] > a:first").trigger('click');
				return;
			}
		}
	}
}

stage.onMouseOver=function()
{
	if (stage.infowindow!=null) stage.infowindow.show();
}

stage.onMouseOut=function()
{
	if (stage.infowindow!=null) stage.infowindow.hide();
}

function codeAddress() {
  var value=$.trim($("#search-place").val());
  if (value=="") return;
  var address = value+",SI";
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var infoWindow = new google.maps.InfoWindow({
		content: results[0].formatted_address,
		position: results[0].geometry.location,
	  });
	  infoWindow.open(map);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function initMap() {
    var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(52.15, 5.38),
    mapTypeId: 'elf_basemap',
		mapTypeControlOptions: {
			mapTypeIds:['elf_basemap']
	}
  };
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  map.setOptions({draggableCursor:'default'});
  ////////////////
  function CustomMapType(name,translation) {
		this.name=translation;
		this.alt=translation;
		this.url=name;
	}

	CustomMapType.prototype.tileSize = new google.maps.Size(256,256);
	CustomMapType.prototype.maxZoom = 18;
	CustomMapType.prototype.minZoom = 1;

	CustomMapType.prototype.getTileUrl=function(tile,zoom){
		return 'http://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=elf_basemap&STYLE=default&FORMAT=image/png&TILEMATRIXSET=EPSG:3857&TILEMATRIX=EPSG:3857:'+zoom+'&TILEROW='+tile.y+'&TILECOL='+tile.x;
	};

	var mname='elf_basemap';
	var coordinateMapType = new google.maps.ImageMapType(new CustomMapType(mname,mname));
	map.mapTypes.set(mname, coordinateMapType);
  //
  /////////////////
  map.setMapTypeId('elf_basemap');

  stage.initStageInfoWindow();
  stage.getDefaultValues();

  var options={
      fillColor: '#ffff00',
      fillOpacity: 0.7,
      strokeWeight: 1,
      clickable: true,
      editable: true,
	  //draggable: true,
      zIndex: 1,
	  suppressUndo:true //$('img[src$="undo_poly.png"]').hide()
    };
  stage.drawingManager = new google.maps.drawing.DrawingManager({
    drawingControl: false,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
	google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.RECTANGLE
      ]
    },
    circleOptions: options,
	polygonOptions: options,
	rectangleOptions: options,
	markerOptions: {
		icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
	},
  });

  stage.radius_infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(stage.drawingManager, 'overlaycomplete', stage.onOverlayComplete);
  google.maps.event.addListener(stage.drawingManager, 'markercomplete', stage.onMarkerComplete);
  google.maps.event.addListener(stage.drawingManager, 'polygoncomplete', stage.onPolygonComplete);
  google.maps.event.addListener(stage.drawingManager, 'circlecomplete', stage.onCircleComplete);
  google.maps.event.addListener(stage.drawingManager, 'rectanglecomplete', stage.onRectangleComplete);

  google.maps.event.addListener(map, 'zoom_changed', stage.onZoomChanged);
  google.maps.event.addListener(map, 'mouseover', stage.onMouseOver);
  google.maps.event.addListener(map, 'mouseout', stage.onMouseOut);

  stage.infoWindowTemplate='<div style="background-color:#fffff0;margin-left:10px;margin-top:15px;padding-left:5px;padding-right:5px;-moz-border-radius: 7px;-webkit-border-radius: 7px;border-radius: 7px;border: 1px solid;"></div>';

  var q=stage.QueryString;
  if (q.iframe!==undefined && q.iframe==1)
	{
		stage.iframe=true;
		theLayout.removePane('north');
		$('.ui-layout-north').hide();
		$(".slider").hide();
		$("#opacity").remove();
		map.set('panControl',false);
		map.set('zoomControl',false);
		map.set('scaleControl', false);
		map.set('streetViewControl',false);
		map.set('mapTypeControl',false);
		map.set('disableDoubleClickZoom', true);
		map.set('draggable', false);
		map.set('scrollwheel', false);
		theLayout.options.west.spacing_open=0;
		theLayout.options.west.spacing_closed=0;
		theLayout.resizeAll();
		$('.ui-layout-west, .ui-layout-center, .ui-layout-south').click(function(e,a)
		{
			stage.iframeClick(a);
		});
	}

  if (stage.iframe==false)
  {
	map.enableKeyDragZoom({
		visualEnabled: true,
		visualPosition: google.maps.ControlPosition.LEFT,
		visualPositionOffset: new google.maps.Size(35, 0),
		visualPositionIndex: null,
		visualSprite: "http://maps.gstatic.com/mapfiles/ftr/controls/dragzoom_btn.png",
		visualSize: new google.maps.Size(20, 20),
		visualTips: {
		  off: 'Set scale',
		  on: 'Set scale'
		}
    });
  }
}

stage.iframeClick=function(a)
{
	if (a===undefined) window.open(stage.deepLink(), '_blank');
}

stage.onOverlayComplete=function(overlay)
{
	if (stage.selectedGroupInx==null) {overlay.setMap(null);overlay=null;return;}
	stage.delineation_overlay=overlay;
	var selectedGroup=stage.groups[stage.selectedGroupInx];
	if (stage.selectedLevelDatum!=selectedGroup.levelDatum || stage.selectedVariable!=selectedGroup.variable)
	{
		stage.addDelineationTab();
	}
}

stage.onPolygonComplete=function(poly)
{
	stage.drawingManager.setDrawingMode(null);
	stage.resetDrawingControl();
	poly.type='p';
	poly.setVisible(!$("#show-shapes").hasClass("s_show"));
	poly.add=$('#addition').hasClass('active');
	stage.groups[stage.selectedGroupInx].ga.push(poly);
	if (!poly.add) poly.setOptions({'fillColor':'red'});
	stage.setSelection('p',poly);
	google.maps.event.addListener(poly,'click',function(){stage.setSelection('p',poly);});
	google.maps.event.addListener(poly.getPath(), 'set_at', function(){stage.onShapeChanged();});
	google.maps.event.addListener(poly.getPath(), 'insert_at', function(){stage.onShapeChanged();});
	stage.onShapeChanged();
}

stage.setSelection=function(type,shape)
{
	var selection=stage.groups[stage.selectedGroupInx].selection;
	if (selection!=null)
	{
		if (selection.type!='m') selection.setEditable(false);
	}

	if (shape==null)
		stage.groups[stage.selectedGroupInx].selection=null;
	else
	{
		stage.groups[stage.selectedGroupInx].selection=shape;
		if (type!='m') shape.setEditable(true);

		if (type=='c')
		{
			stage.radius_infowindow.setPosition(shape.getCenter());
			stage.radius_infowindow.setContent('<div style="margin-top:10px">\
							<label for="radius">'+stage.trans['radius']+'</label>&nbsp;\
							<input type="text" id="radius" style="width:100px" placeholder="radius" value="'+stage.formatRadius(shape)+'">\
							<span>&nbsp;m</span>\
							<br>\
							<button id="submit-radius" class="button button-mini pull-right">'+stage.trans['radius-submit']+'</button>\
						</div>');
			stage.radius_infowindow.shape=shape;
			stage.radius_infowindow.open(map);
			$('#radius').keypress(function(e){stage.onRadiusKeyPress(e,this,shape)}).on('input',function(){stage.onRadiusTextChanged(this,shape)});
			$('#submit-radius').click(function(){stage.onShapeChanged(shape);});
		}
	}
}

stage.formatRadius=function(circ)
{
	return circ.getRadius().toFixed(0).toString().replace('.',stage.decimal);
}

stage.onRadiusTextChanged=function(that,shape)
{
	google.maps.event.clearListeners(shape, 'radius_changed');
	shape.setRadius(parseFloat(stage.removeSeparator($(that).val())));
	$('#submit-radius').show();
	google.maps.event.addListener(shape, 'radius_changed', function(){stage.onShapeChanged(shape);});
}

stage.onRadiusKeyPress=function(event,that,shape)
{
	if (!(event.which == 8 || event.which == 13 || event.which == 0
	    || (event.which == stage.decimal.charCodeAt(0) && $(that).val().indexOf(stage.decimal) == -1)
	    || (event.which>="0".charCodeAt(0) && event.which<="9".charCodeAt(0)))
	)
	{
		event.preventDefault();
		return false;
	}

	if (event.which==13) stage.onShapeChanged(shape);

	return true;
}

stage.onCircleComplete=function(circ)
{
	stage.drawingManager.setDrawingMode(null);
	stage.resetDrawingControl();
	circ.type='c';
	circ.setVisible(!$("#show-shapes").hasClass("s_show"));
	circ.add=$('#addition').hasClass('active');
	stage.groups[stage.selectedGroupInx].ga.push(circ);
	if (!circ.add) circ.setOptions({'fillColor':'red'});
	stage.setSelection('c',circ);
	google.maps.event.addListener(circ,'click',function(){stage.setSelection('c',circ);});
	google.maps.event.addListener(circ, 'radius_changed', function(){stage.onShapeChanged(circ);});
	google.maps.event.addListener(circ, 'center_changed', function(){stage.onShapeChanged();});
	stage.onShapeChanged(circ);
}

stage.addMarkerSelections=function()
{
	var selectors=stage.groups[stage.selectedGroupInx].ga;
	var sids=stage.groups[stage.selectedGroupInx].ids;
	if (selectors!==undefined)
	{
		var len=selectors.length;
		for (var i=0;i<len;++i)
		{
			var selector=selectors[i];
			if (selector.type=='m') sids[selector.mid]=true;
		}
	}
}

stage.reshapeMarkerSelections=function()
{
	var selectors=stage.groups[stage.selectedGroupInx].ga;
	if (selectors!==undefined)
	{
		var len=selectors.length;
		for (var i=0;i<len;++i)
		{
			var selector=selectors[i];
			if (selector.type=='m')
			{
				selector.mid=null;
			}
		}
	}
}

stage.onShapeChanged=function(chshape)
{
	if (chshape!==undefined && chshape.type=='c' && stage.radius_infowindow.shape==chshape && chshape.visible) $('#radius').val(stage.formatRadius(chshape));
	if (stage.groups[stage.selectedGroupInx].ga===undefined) return;

	var len=stage.groups[stage.selectedGroupInx].ga.length;
	var params=[];
	for (var i=0;i<len;i++)
	{
		var shape=stage.groups[stage.selectedGroupInx].ga[i];
		var type=shape.type;
		if (type!='m')
		{
			var add=shape.add;
			var prop={};
			if (type=='c')
				prop={center:shape.getCenter().toString(),radius:shape.getRadius()};
			else if (type=='r')
				prop={bounds:shape.getBounds().toString()};
			else if (type=='p')
				prop={vertices:shape.getPath().getArray().toString()};

			if (!add) prop.sub=1;
			prop.type=type;
			prop.table=stage.layerTable;
			params.push(prop);
		}
	}

	$.post(stage.host+"index.php?r=site/delineate",{data:JSON.stringify(params)},function(data)
	{
		var ids=jQuery.parseJSON(data);
		var len=ids.length;
		var sids=[];
		for (var i=0;i<len;i++)
		{
			sids[parseInt(ids[i])]=true;
		}

		stage.groups[stage.selectedGroupInx].ids=sids;
		stage.addMarkerSelections();

		stage.select_features(sids);
		if (chshape!==undefined && chshape.type=='c') $('#submit-radius').hide();
	});
}

stage.c2id=function(c)
{
	var zoom=map.getZoom();
	var proj = map.getProjection();
	var p = proj.fromLatLngToPoint(c);
	var k = Math.pow(2, zoom)/256.0;
	var dtile={x:p.x*k,y:p.y*k};
	var tile={x:Math.floor(dtile.x),y:Math.floor(dtile.y)};
	var cp={x:Math.floor((dtile.x-tile.x)*256),y:Math.floor((dtile.y-tile.y)*256)}
	var cpi=(cp.x+cp.y*256)*4;
	var data=stage.the_overlay.cache[zoom][tile.x][tile.y].f;
	if (data!==undefined) return rgbToInt(data[cpi],data[cpi+1],data[cpi+2]);
	return null;
}

stage.getDrawingMarkerIndex=function(mid)
{
	var ga=stage.groups[stage.selectedGroupInx].ga;
	var len=ga.length;
	for (var i=0;i<len;++i)
	{
		var shape=ga[i];
		if (shape.type=='m' && shape.mid==mid) return i;
	}
	return null;
}

stage.onMarkerComplete=function(marker)
{
	var id=stage.c2id(marker.getPosition());
	marker.setMap(null);
	if (id!=null && id!=rgbToInt(255,255,255) && id!=rgbToInt(255,0,0))
	{
		marker.add=$('#addition').hasClass('active');
		stage.select_feature(id,marker.add);
		marker.mid=id;
		marker.type='m';
		if (marker.add) {
			stage.groups[stage.selectedGroupInx].ga.push(marker);
		}
		else
		{
			var inx=stage.getDrawingMarkerIndex(id);
			if (inx!=null) stage.groups[stage.selectedGroupInx].ga.splice(inx,1);
			marker=null;
		}
	}
}

stage.onRectangleComplete=function(rect)
{
	stage.drawingManager.setDrawingMode(null);
	stage.resetDrawingControl();
	rect.type='r';
	rect.setVisible(!$("#show-shapes").hasClass("s_show"));
	rect.add=$('#addition').hasClass('active');
	stage.groups[stage.selectedGroupInx].ga.push(rect);
	if (!rect.add) rect.setOptions({'fillColor':'red'});
	stage.setSelection('r',rect);
	google.maps.event.addListener(rect,'click',function(){stage.setSelection('r',rect);});
	google.maps.event.addListener(rect, 'bounds_changed', function(){stage.onShapeChanged();});
	stage.onShapeChanged();
}

function borderLayout()
{
	theLayout = $('body').layout({
		north__size:		"auto",
		north__showOverflowOnHover:	true,
		north__initClosed:	false,
		north__initHidden:	false,
		north__resizable:			false,	// OVERRIDE the pane-default of 'resizable=true'
		north__spacing_open:		0,		// no resizer-bar when open (zero height)
		north__spacing_closed:		20,		// big resizer-bar when open (zero height)

		east__minSize: 300,
		east__initHidden: true,

		onclose: function(){
			google.maps.event.trigger(map, 'resize');
		},

		west__size:	300,
		west__minSize: 300,

		south__size:	0,
		south__minSize: 0,
		south_resizable:false,
		south__initClosed:	true,
		south__initHidden:	true,
		south__spacing_open:		0,

		livePaneResizing: false,
		stateManagement__enabled: false,
		showDebugMessages: false,

		ondrag_start: function () {
			map.controls[0].deactivate();
			return true; // false = Cancel
		},
		ondrag_end: function () {
			map.controls[0].activate();
			return true; // false = Cancel
		}
	});

	stage.level_menu=document.getElementById("level-menu");
	stage.variable_menu=document.getElementById("variable-menu");
	$('.ui-layout-west, .ui-layout-center').mouseenter(function(){theLayout.allowOverflow(stage.level_menu);theLayout.allowOverflow(stage.variable_menu)});
}

stage.initTransparency=function()
{
	$('#transparency').slider({
		min:0,
		max:100,
		slide: function( event, ui ){stage.setOpacity(1.0-ui.value/100.0);}
		});
}

stage.setOpacity=function(o,src)
{
	if (stage.the_overlay===undefined) return;
	stage.the_overlay.setOpacity(o);
	stage.opacity=o;
	if (src!==undefined) $('#transparency').slider('value',100*(1.0-o));
}

stage.removeSeparator=function(a)
{
	var sremove=stage.separator;
	var dremove=stage.decimal;
	if (stage.separator=='.') sremove='\\.';
	if (stage.decimal=='.') dremove='\\.';
	return a.replace(new RegExp(sremove,'g'), '').replace(new RegExp(dremove,'g'), '.');
}

stage.init_slider=function(type,i,jqslider)
{
	var _min=parseFloat(stage.removeSeparator($('#cb1-'+i).text()));
	var _max=parseFloat(stage.removeSeparator($('#cb2-'+i).text()));

	if (type==1)
	{
		_min=stage.cache[stage.selectedLevelDatum][stage.selectedVariable].stats.min;
		jqslider.slider("option","min",_min);
		jqslider.slider("option","max",_max);
		jqslider.slider("option","value",_max);
	}
	else if (type==2)
	{
		_max=stage.cache[stage.selectedLevelDatum][stage.selectedVariable].stats.max;
		jqslider.slider("option","min",_min);
		jqslider.slider("option","max",_max);
		jqslider.slider("option","value",_min);
	}
	else if (type==3)
	{
		jqslider.slider("option","min",_min);
		jqslider.slider("option","max",_max);
		jqslider.slider("option","values",[_min,_max]);
	}
}

stage.update_cba=function(i,bval1,type,bval2)
{
	if (type===0)
	{
		stage.cba[i+2]+=bval1-stage.cba[i+1];
		stage.cba[i+1]=bval1;
	}
	else if (type===1)
	{
		stage.cba[2*i-1]+=bval1-stage.cba[2*i];
		stage.cba[2*i]=bval1;
	}
	else if (type===2)
	{
		if (bval1!==null && bval1!==undefined)
		{
			stage.cba[2*i-1]+=bval1-stage.cba[2*i];
			stage.cba[2*i]=bval1;
		}

		if (bval2!==null && bval2!==undefined)
		{
			stage.cba[2*i+2]+=bval2-stage.cba[2*i+1];
			stage.cba[2*i+1]=bval2;
		}
	}
}

stage._addColorDiv=function(i,selColor,cb1,cb2,notShown,k2,g,dc)
{
	var div=$('<div/>');
	div.addClass("row-fluid");
	var dtitle='';
	if (stage.iframe==false) dtitle=' title="'+stage.trans['sc.legend.color']+'"';
	var div1=$('<div'+dtitle+'></div>');
	div1.addClass("span2");
	var colorInput=jQuery('<input/>', {
		value: selColor,
		type: 'text'
	});
	colorInput.appendTo(div1);

	var div12=$('<div/>');
	div12.addClass("span6 legendText");
	var sliderLimits=[];
	var manj="&nbsp;"+stage.trans['ali_manj'];
	var vec="&nbsp;"+stage.trans['ali_vec'];
	if (k2) {
		manj="";vec="";
	}
	if (i==0)
	{
		div12.html("<span class='legendSpan t0' id='cb2-"+i+"'>"+numberWithCommas3(cb2.toFixed(dc))+"</span>"+manj);
		sliderLimits=[null,cb2];
	}
	else if (cb2!==undefined)
	{
		div12.html("<span class='legendSpan t2' id='cb1-"+i+"'>"+numberWithCommas3(cb1.toFixed(dc))+"</span>&nbsp;&ndash;&nbsp;<span class='legendSpan t2' id='cb2-"+i+"'>"+numberWithCommas3(cb2.toFixed(dc))+"</span>");
		sliderLimits=[cb1,cb2];
	}
	else if (cb1!==undefined)
	{
		div12.html("<span class='legendSpan t1' id='cb1-"+i+"'>"+numberWithCommas3(cb1.toFixed(dc))+"</span>"+vec);
		sliderLimits=[cb1,null];
	}

	if (!k2)
	{
		var div2=$('<div/>');
		div2.addClass("span4");
		if (!notShown)
		{
			var _slider=$('<div title="'+stage.trans['sc.legend.slide']+'"></div>');
			_slider.addClass("slider");
			_slider.appendTo(div2);
			if (sliderLimits[0]==null)
			{
				_slider.slider({
					range: 'min',
					step: g,
					min: stage.cache[stage.selectedLevelDatum][stage.selectedVariable].stats.min,
					max: sliderLimits[1],
					value: sliderLimits[1],
					slide: function( event, ui ){
						$(ui.handle).html("<div class='slider-value'>"+ui.value+"</div>");
					},
					start: function (event,ui)
					{
						stage.init_slider(1,i,$(this));
					},
					stop: function (event,ui){
						$(ui.handle).empty();
						var dval=stage.removeSeparator($('#cb2-'+i).text())-ui.value;
						$('#cb2-'+i).html(numberWithCommas3(ui.value.toFixed(dc)));
						var e=$('#cb1-'+(i+1));
						e.html(numberWithCommas3((stage.removeSeparator(e.text())-dval).toFixed(dc)));
						stage.init_slider(1,i,$(this));
						stage.update_cba(i,parseFloat(ui.value.toFixed(dc)),0);
						stage.overlay();
					}
				});
			}
			else if (sliderLimits[1]==null)
			{
				_slider.slider({
					range: 'max',
					step: g,
					min: sliderLimits[0],
					max: stage.cache[stage.selectedLevelDatum][stage.selectedVariable].stats.max,
					value: sliderLimits[0],
					slide: function( event, ui ){
						$(ui.handle).html("<div class='slider-value'>"+ui.value+"</div>");
					},
					start: function (event,ui)
					{
						stage.init_slider(2,i,$(this));
					},
					stop: function (event,ui){
						$(ui.handle).empty();
						var dval=stage.removeSeparator($('#cb1-'+i).text())-ui.value;
						$('#cb1-'+i).html(numberWithCommas3(ui.value.toFixed(dc)));
						var e=$('#cb2-'+(i-1));
						e.html(numberWithCommas3((stage.removeSeparator(e.text())-dval).toFixed(dc)));
						stage.init_slider(2,i,$(this));
						stage.update_cba(i,parseFloat(ui.value.toFixed(dc)),1);
						stage.overlay();
					}
				});
			}
			else
			{
				_slider.slider({
					range: true,
					step: g,
					min: sliderLimits[0],
					max: sliderLimits[1],
					values: sliderLimits,
					slide: function( event, ui ) {

						if (ui.values[0]===stage.cba[2*i+1])
							ui.values[0]--;
						else if (ui.values[1]===stage.cba[2*i])
							ui.values[1]++;

						$(ui.handle).html("<div class='slider-value'>"+ui.values[0]+"&nbsp;-&nbsp;"+ui.values[1]+"</div>");
					},
					start: function (event,ui)
					{
						stage.init_slider(3,i,$(this));
					},
					stop: function (event,ui){
						$(ui.handle).empty();
						var cb1=$('#cb1-'+i);
						var cb2=$('#cb2-'+i);

						if (ui.values[0]===stage.cba[2*i+1])
							ui.values[0]--;
						else if (ui.values[1]===stage.cba[2*i])
							ui.values[1]++;

						var dval1=stage.removeSeparator(cb1.text())-ui.values[0];
						var dval2=stage.removeSeparator(cb2.text())-ui.values[1];
						cb1.html(numberWithCommas3((ui.values[0]).toFixed(dc)));
						cb2.html(numberWithCommas3((ui.values[1]).toFixed(dc)));
						var e=$('#cb1-'+(i+1));
						e.html(numberWithCommas3((stage.removeSeparator(e.text())-dval2).toFixed(dc)));
						var e=$('#cb2-'+(i-1));
						e.html(numberWithCommas3((stage.removeSeparator(e.text())-dval1).toFixed(dc)));
						stage.init_slider(3,i,$(this));
						stage.update_cba(i,parseFloat(ui.values[0].toFixed(dc)),2,parseFloat(ui.values[1].toFixed(dc)));
						stage.overlay();
					}
				});
			}
			stage.legend_sliders[i]=_slider;
		}
	}

	div1.appendTo(div);
	div12.appendTo(div);
	if (!k2 && !stage.iframe) div2.appendTo(div);

	div.appendTo('#legend');

	colorInput.spectrum({showInput: true,
				disabled:stage.iframe,
				change: function(color) {
					stage.colors[i]=color.toHex();
					stage.cbac[i]=color.toRgb();
					stage.overlay();
				}
	});


	if (stage.iframe) $(div1).find('.sp-preview').click(function(e,a){stage.iframeClick(a);})

	var t=colorInput.spectrum("get");
	return t.toRgb();
}

stage.addSpecialColorDiv=function(selColor,text,value)
{
	var div=$('<div/>');
	div.addClass("row-fluid");
	var div1=$('<div title="'+stage.trans['sc.legend.grey']+'"></div>');
	div1.addClass("span2");
	var colorInput=jQuery('<input/>', {
		value: selColor,
		type: 'text'
	});
	colorInput.appendTo(div1);

	var div12=$('<div/>');
	div12.addClass("span6 legendText");
	div12.html(text);

	div1.appendTo(div);
	div12.appendTo(div);

	div.appendTo('#legend');

	colorInput.spectrum({showInput: true,
			    disabled:stage.iframe,
						change: function(color) {
							stage.specialValues[value].c=color.toRgb();
							stage.overlay();
						}
	});

	if (stage.iframe) $(div1).find('.sp-preview').click(function(e,a){stage.iframeClick(a);})
	var t=colorInput.spectrum("get");
	return t.toRgb();
}

stage.init_mouse_move_info=function()
{
	if (stage.infoWindowTemplate==null) return;
	if (stage.infowindow!=null) return;

	stage.infowindow = new stage.stageinfo(new google.maps.LatLng(46.119944, 14.815333), map,stage.infoWindowTemplate);
	//stage.infowindow.hide();
		google.maps.event.addListener(map, 'mousemove', function(c) {
		  var proj = map.getProjection();
		  var p = proj.fromLatLngToPoint(c.latLng);
		  var zoom=map.getZoom();
		  var k = Math.pow(2, zoom)/256.0;
		  var dtile={x:p.x*k,y:p.y*k};
		  var tile={x:Math.floor(dtile.x),y:Math.floor(dtile.y)};
		  var color="";
		  var featureName;
		  var variableValue;

		  if (stage.the_overlay.cache[zoom]!==undefined &&
			  stage.the_overlay.cache[zoom][tile.x]!==undefined &&
			  stage.the_overlay.cache[zoom][tile.x][tile.y]!==undefined)
		  {
			var cp={x:Math.floor((dtile.x-tile.x)*256),y:Math.floor((dtile.y-tile.y)*256)}
			var cpi=(cp.x+cp.y*256)*4;
			var data=stage.the_overlay.cache[zoom][tile.x][tile.y].f;
			if (data!==undefined)
			{
				color=rgbToInt(data[cpi],data[cpi+1],data[cpi+2]);
				var featureNames=stage.getVariableCache2("feature_name",stage.selectedLevelDatum);
				if (featureNames!=null) featureName=featureNames[color];
				if (stage.variableValues!==undefined) variableValue=stage.variableValues[color];
				if (isNaN(variableValue))
				{
					var sv=stage.specialValues[variableValue];
					if (sv!==undefined) variableValue=sv.t;
				}
			}
		  }

		  if (featureName===undefined) featureName='ID: GID_'+color;
		  if (variableValue!==undefined)
		  {
			var cache=stage.getVariableCache();
			var snd="";
			if (cache!=null)
			{
				snd=cache.snd;
				if (!isNaN(variableValue)) variableValue=numberWithCommas3(variableValue.toFixed(cache.dc));
			}

			stage.infowindow.setText(featureName+"<br>"+(snd==""?stage.selectedVariableDescription:snd)+"<br><b>"+variableValue+"</b>");
			stage.infowindow.show();
		  }
		  else
		  {
			stage.infowindow.hide();
		  }
		  stage.infowindow.setPosition(c.latLng);
		});
}
stage.contentInfo=function(link)
{
	var a=[];
	link.parents('li').each(function(){a.push($(this).find('a:first').text());});
	a.pop();
	stage.selectedVariableDescription=a.reverse().join(' > ');
	$('#content-selection-text').html('<b>'+stage.trans['selected']+"</b><br/>");
	$('#content-selection').show();
	$('#opacity').show();
	$('#reset-colors').click(function(){
		stage.unsetCache('colors');
		stage.selected_palette=null;
		stage.cachedVariable(true);
		});
	$('#reset-classes').click(function(){
		stage.unsetCache('cba');
		stage.cachedVariable(true);
		});
}
stage.unsetCache=function(key)
{
	var d=stage.cache[stage.selectedLevelDatum];
	for (var vi in d) delete d[vi][key];
}
stage.notesInfo=function(notes)
{
	if (notes=='')
	{
		$('#variable-comments').empty();
		$('#variable-comments').hide();
		return;
	}

	$('#variable-comments').html(notes);
	$('#variable-comments').show();
}

stage.isNumber=function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

stage.countDecimals=function(value)
{
	if (Math.floor(value) !== value)
		return value.toString().split(".")[1].length || 0;
	return 0;
}
stage.getLevelVariableCache=function()
{
	var cache=stage.getLevelCache();
	if (cache[stage.selectedVariable]===undefined) cache[stage.selectedVariable]={};
	return cache[stage.selectedVariable];
}
stage.getLevelCache=function()
{
	if (stage.cache.level[stage.selectedLevelId]===undefined) stage.cache.level[stage.selectedLevelId]={};
	return stage.cache.level[stage.selectedLevelId];
}
stage.getVariableCache=function(create)
{
	if (stage.cache[stage.selectedLevelDatum]!==undefined && stage.cache[stage.selectedLevelDatum][stage.selectedVariable]!==undefined)
	{
		return stage.cache[stage.selectedLevelDatum][stage.selectedVariable];
	}

	if (create===true)
	{
		if (stage.selectedLevelDatum!==null && stage.selectedVariable!==null)
		{
			if (stage.cache[stage.selectedLevelDatum]===undefined) stage.cache[stage.selectedLevelDatum]=[];
			if (stage.cache[stage.selectedLevelDatum][stage.selectedVariable]===undefined) stage.cache[stage.selectedLevelDatum][stage.selectedVariable]={};
			return stage.cache[stage.selectedLevelDatum][stage.selectedVariable];
		}
	}

	return null;
}

stage.getVariableCache2=function(vid,did)
{
	if (stage.cache[did]!==undefined && stage.cache[did][vid]!==undefined)
	{
		return stage.cache[did][vid];
	}

	return null;
}


stage.getColors=function(data)
{
	var colors=null;
	if (stage.selected_palette!=null)
		colors=stage.selected_palette;
	else
		colors=jQuery.parseJSON($(data).find("cp:first").html());

	return colors;
}

stage.classBreaks=function(data,cache)
{
	var k2=false;
	var method=null;
	if (stage.variableValues.length<3)
	{
		classBreaks=stage.variableValues.join(",");
		k2=true;
		$('#update-classification').hide();
		method=0;
	}
	else
	{
		if (cache.cb===undefined)
			classBreaks=$(data).find("cb:first").html();
		else
			classBreaks=cache.cb;
	}

	var dc=$(data).find("ndc:first").html();
	var g=Math.pow(10,-dc);
	var nc=null;
	if (method==null) method=$(data).find("cm:first").html();
	if (classBreaks=="" || method!=0)
	{
		if (method=="") return false;
		nc=$(data).find("nc:first").html();
		if (nc=="") return false;
		nc=parseInt(nc);
		var fvval=[];
		for (var i=0;i<stage.variableValues.length;++i)
		{
			var v=parseFloat(stage.variableValues[i]);
            if (!isNaN(v) && v>-1000000) fvval.push(v);
		}
		if (fvval.length==0) return false;
		var gs=new geostats(fvval);

		var cb=[];
		if (method==1)
			cb=gs.getQuantile(nc);
		else if (method==2)
			cb=gs.getEqInterval(nc);
		else if (method==4)
			cb=gs.getJenks(nc);

		cb.shift();
		var _cb=[];
		var cbinx=0;

		for (var i=0;cbinx<cb.length-1;i++)
		{
			if (i%2==0)
				_cb.push(parseFloat(cb[i-(cbinx++)]));
			else
				_cb.push(parseFloat(_cb[i-1])+g);
		}

		_cb.push(parseFloat(_cb[_cb.length-1])+g);
		cb=_cb;
		classBreaks=cb.join(",");
	}

	cache.nc=nc;
	cache.dc=dc;
	cache.k2=k2;
	return classBreaks;
}

stage.init_update_class_button=function()
{
	$('#update-classification').click(function(){
		var cba=stage.cba;
		cba.shift();
		$.get(stage.host+"admin/index.php?r=layer/updateClassification",{lid:stage.selectedLevelDatum,tag:stage.selectedVariable,cb:cba.join(",")},function(data){
			if (data=="")
				alert('ok');
			else
				alert(data);
		}).fail(function(jqXHR){
			alert(jqXHR.responseText);
		});
	});
}

stage.init_legend=function(data)
{
	var stats=jQuery.parseJSON($(data).find("stats:first").html());
	stats.min=parseFloat(stats.min);
	stats.max=parseFloat(stats.max);
	var cache=stage.getVariableCache();
	if (cache==null) return false;

	cache.specialValues=$.extend(true, {}, stage._specialValues);
	cache.stats=stats;

	var colors=stage.getColors(data);
	if (colors===undefined || colors==null) return false;
	cache.cp=colors;

	var classBreaks=stage.classBreaks(data,cache);
	if (classBreaks===undefined || classBreaks==null) return false;
	cache.cb=classBreaks;

	var cba=classBreaks.split(',');
	cba.unshift(cache.stats.min);
	cba.push(cache.stats.max);
	for (var i=0;i<cba.length;++i) cba[i]=parseFloat(parseFloat(cba[i]).toFixed(cache.dc));
	stats.min=parseFloat(stats.min.toFixed(cache.dc));
	stats.max=parseFloat(stats.max.toFixed(cache.dc));
	if (cache.nc==null) cache.nc=parseInt(cba.length/2);
	if (cache.nc<3)
	{
		cba.sort(function(a,b){return a-b;});
		if (colors.c[cache.nc]===undefined) {
			for(var key in colors.c)
			{
				var len=colors.c[key].length;
				colors.c[cache.nc]=[colors.c[key][0],colors.c[key][len-1]];
				break;
			}
		}
	}

	var fcol=colors.c[cache.nc];
	if (fcol===undefined || !$.isArray(fcol)) {
		fcol=colors.c;
		if (fcol===undefined) return false;
	}

	stage.render_legend(fcol,cache,cba);

	stage.init_editable_legend(cache.dc);

	return true;
}

stage.render_legend=function(colors,cache,cba)
{
	$("#legend").empty();

	if (cache.cba!==undefined)
		cba=cache.cba;
	else if (stage.cba_init!==undefined)
	{
		cba=stage.cba_init;
		for (var k=0;k<cba.length;++k) cba[k]=parseFloat(cba[k]);
		delete stage.cba_init;
	}

	if (cache.colors!==undefined)
		colors=cache.colors;
	else if (stage.colors_init!==undefined)
	{
		colors=stage.colors_init;
		delete stage.colors_init;
	}

	var k=0;
	var lngth=colors.length;
	stage.cbac=[];
	stage.legend_sliders=[];
	var lc=cba.pop();
	for (var i=0;i<lngth;i++) {
		if (cba[k]!==undefined)
		{
			stage.cbac.push(stage._addColorDiv(i,colors[i],cba[k],cba[k+1],false,cache.k2,cache.g,cache.dc));
			k=k+2;
		}
	}
	cba.push(lc);

	stage.cba=cba;
	stage.colors=colors;
}

stage.init_editable_legend=function(dc)
{
	if (stage.iframe) return;
	$(".legendSpan").editable(function(value, settings) {
		var oldValue=this.revert;
		value=stage.removeSeparator(value);
		if (!stage.isNumber(value)) return oldValue;
		var jthis=$(this);

		var a=this.id.split("-");
		var i=parseInt(a[1]);
		var cb=a[0];

		if (jthis.hasClass("t0"))
		{
			if (value>=oldValue || value<0) return(oldValue);
			stage.update_cba(i,parseFloat(value),0);
			$('#cb1-'+(i+1)).html(numberWithCommas3(parseFloat(stage.cba[2*i+2]).toFixed(dc)));
		}
		else if (jthis.hasClass("t1"))
		{
			if (value<=oldValue) return(oldValue);
			stage.update_cba(i,parseFloat(value),1);
			$('#cb2-'+(i-1)).html(numberWithCommas3(parseFloat(stage.cba[2*i-1]).toFixed(dc)));
		}
		else if (jthis.hasClass("t2"))
		{
			if (cb==='cb1')
			{
				if (value<=oldValue || value>=stage.cba[2*i+1]) return(oldValue);
				stage.update_cba(i,parseFloat(value),2);
				$('#cb2-'+(i-1)).html(numberWithCommas3(parseFloat(stage.cba[2*i-1]).toFixed(dc)));
			}
			else if (cb==='cb2')
			{
				if (value>=oldValue || value<=stage.cba[2*i-1]) return(oldValue);
				stage.update_cba(i,null,2,parseFloat(value));
				$('#cb1-'+(i+1)).html(numberWithCommas3(parseFloat(stage.cba[2*i+2]).toFixed(dc)));
			}
		}
		stage.overlay();
		return(numberWithCommas3(parseFloat(value).toFixed(dc)));
	 }, {
      tooltip   : stage.trans['sc.legend.click'],
      style  : "inherit",
	  select: true
	});
}
stage.cachedVariable=function(update)
{
	var cache=stage.getVariableCache();
	if (cache!=null)
	{
		stage.layerTable=cache.layerTable;
		$('#slo').html(numberWithCommas3(parseFloat(cache.slo).toFixed(cache.dc)));
		stage.variableValues=cache.variableValues;
		if (stage.variableValues===undefined) {stage.clearLayer();return true;}
		if (stage.init_legend(cache.legendData))
		{
			stage.notesInfo(cache.notes);
			if (update===undefined) update=false;
			stage.overlay(update);
		}
		else
		{
			$('#legend').empty();
		}
		return true;
	}
	return false;
}
stage.getVariableNotes=function(link)
{
	var cache=stage.getVariableCache(true);
	var notes="";
	link.parents('li[data-cid]').each(function(){notes+=$(this).attr('data-cid')+",";});
	var variableData=tjsdata[stage.selectedVariable];

	var data = ''; //'<a target="_blank" href="http://appsso.eurostat.ec.europa.eu/nui/show.do?dataset='+data_set+'&lang=en">Causes of death - Crude death rate by NUTS 2 region of residence ['+data_set+']</a>';
	data+='<br>';
	data+='<b>'+variableData.ICD10+'</b>&nbsp;'+variableData.definition;
	data+='<br>';
	// data+='<small>The <b>crude death rate</b> describes mortality in relation to the total population. Expressed in deaths per 100,000 inhabitants, it is calculated as the number of deaths recorded in the population for a given period divided by population in the same period and then multiplied by 100,000. <a href="http://ec.europa.eu/eurostat/cache/metadata/en/hlth_cdeath_esms.htm" target="_blank">More info ...</a></small>'
	stage.notesInfo(data);
	cache.notes=data;

}

stage.addDelineationTab=function()
{
	if (stage.switchDelineationTab()==false) $('#add-a-group').trigger('click');
}

stage.switchDelineationTab=function()
{
	var len=stage.groups.length;
	for (var i=0;i<len;++i) {
		var g=stage.groups[i];
		if (g.levelDatum==stage.selectedLevelDatum && g.variable==stage.selectedVariable) {
			$('#acc-'+g.id).trigger('click');
			return true;
		}
	}
	return false;
}

stage.getSDMXLink=function (icd)
{
	/*/?startperiod=2005&endPeriod=2011*/
	return 'http://ec.europa.eu/eurostat/SDMX/diss-web/rest/data/'+data_set+'/A.RT.T.TOTAL.'+icd+'.';
}

stage.getGDASLink=function(url)
{
	//url = encodeURI(url);
	url = encodeURI(url);
	url = (url).replace(/[&]/g, '%26');
	if ($('#custom-dataset-key').val() === "" ) {
		resultURL = "http://"+stage.tjsBasename+"/convert/a/convert/odata?tjs_url=http://"+stage.tjsBasename+"/geoserver/tjs&framework_uri=" + stage.selectedFrameworkURI + "&dataset_url=" + url;
	} else {
		resultURL = "http://"+stage.tjsBasename+"/convert/a/convert/csv?tjs_url=http://"+stage.tjsBasename+"/geoserver/tjs&framework_uri=" + stage.selectedFrameworkURI + "&dataset_url=" + url + "&dataset_key=" + $('#custom-dataset-key').val();
	}

	return resultURL
}

stage.onVariableSelected=function(link,tag_id)
{
	if (link!==undefined && tag_id!==undefined)
	{
		stage.ap_stop();
		stage.abort_ajax_request();
		$('#select-content').hide();
		stage.selectedVariable=tag_id;
		stage.selectedVariableLink=link;
		stage.contentInfo(link);
		if (stage.cachedVariable(true)) return;
		stage.setVariablePaginationWidget('level-datum',stage.onLevelDatumSelected);
		return;
	}

	if (stage.drawingManager.getMap()!=null)
	{
		if (stage.switchDelineationTab()==false)
		{
			var ogroup=stage.groups[stage.selectedGroupInx];
			if (ogroup!==undefined) {
				var len=ogroup.ga.length;
				for (var i=0;i<len;i++) ogroup.ga[i].setMap(null);
			}
		}
		else
		{
			var ogroup=stage.groups[stage.selectedGroupInx];
			if (ogroup!==undefined) {
				var len=ogroup.ga.length;
				for (var i=0;i<len;i++) if (ogroup.ga[i].type!='m') ogroup.ga[i].setMap(map);
			}
		}
	}

	if (stage.cachedVariable(true)) return;
	var cache=stage.getVariableCache(true);
	$('#progress').show();
	stage.getVariableNotes(stage.selectedVariableLink);
	var p;
	var sdmx,gdas;
	var variableData=tjsdata[stage.selectedVariable];
	var icd=variableData['url'];
	dataset_url=icd//stage.getSDMXLink(icd);
	gdas=stage.getGDASLink(icd);
	p = {};
  p.request = 'JoinData';
	p.Service = 'TJS';
	p.Version = '1.0.0';
	p.FrameworkURI = stage.selectedFrameworkURI;
	p.GetDataURL = gdas;

	//"?request=JoinData&Service=TJS&Version=1.0&FrameworkURI=oskari/nuts2&GetDataURL=http%3A%2F%2F"+stage.basename+"%2Fto-gdas%2Fsdmx%3Fframework_url%3Dhttp%253A%252F%252F"+stage.basename+"%252Fgeoserver%252Ftjs%253Fservice%253DTJS%2526version%253D1.0.0%2526request%253DDescribeFrameworks%26dataset_url%3Dhttp%253A%252F%252F"+stage.basename+"%252F"+cached_data_folder+"%252F"+icd+".xml";
	var content_sel=$('#content-selection-text');
	var dataset_link='<a href="'+dataset_url+'" target="_blank">DATASET URL</a>';
	var gdas_link='<a href="'+gdas+'" target="_blank">GDAS URL</a>';

	if (content_sel.find("span#sdmx").length==0)
		content_sel.append('<span id="sdmx">'+dataset_link+'</span><br>');
	else
		content_sel.find("span#sdmx").html(dataset_link);

	if (content_sel.find("span#gdas").length==0)
		content_sel.append('<span id="gdas">'+gdas_link+'</span><br>');
	else
		content_sel.find("span#gdas").html(gdas_link);

	$.ajax({
			type: 'GET',
			url: 'http://' + stage.tjsBasename + '/geoserver/tjs',
			data: p,
			dataType: 'xml',
			success: function(data){
		var join_data_result_link='<a href="http://'+stage.tjsBasename+'/geoserver/tjs?'+$.param(p)+'" target="_blank">JoinData result</a>';
		if (content_sel.find("span#JoinData").length==0)
			content_sel.append('<span id="JoinData">'+join_data_result_link+'</span><br>');
		else
			content_sel.find("span#JoinData").html(join_data_result_link);
//todo
		var xmlDoc = $.parseXML(data);
		$xml = $(data);
		var resource=$xml.find("Resource");
		stage.layerTable=$(resource).find("Parameter[name='layers']").text();
		var years=stage.getLevelVariableCache().dimensions;
		var dimensions=[];
		for (var i=0;i<years.length;++i)
		{
			dimensions.push(years[i]);
		}

		p = {};
		p.service = 'WFS';
		p.version = '1.0.0';
		p.request = 'GetFeature';
		p.typeName = '__temp:' + stage.layerTable;
		// Thijs Brentjens (Geonovum): don't use the id-attribute any longer. This is removed from July 1st from CBS data. Use the statcode instead, see comments elsewhere on statcode too.
		// p.propertyName = 'id,statcode,statnaam,' + dimensions.join(',');
		p.propertyName = 'statcode,statnaam,' + dimensions.join(',');
		p.outputFormat = 'application/json';

		//{'p':'?service=WFS&version=1.0.0&request=GetFeature&typeName=__temp:'+stage.layerTable+'&propertyName=ICC,NUTS_CODE,NUTS_LABEL,'+dimensions.join(',')+',OBJECTID&outputFormat=application/json'}

		stage.jqXHRs['variableValues']=$.ajax({ url: 'http://' + stage.tjsBasename + '/geoserver/tjs', data: p, dataType: 'json', success: function(data){
			//data=jQuery.parseJSON(data);
			stage.variableValues=[];
			var fnames=[];
			var dim = $('#level-datum li.active').text();
			for (var i=0; i<data.features.length;++i)
			{
				var prop=data.features[i].properties;
				// Thijs Brentjens (Geonovum): workaround to get a number only for ids: for CBS we can safely use statcode.
				// CBS data does not have a separate id-attribute any longer as of July 1st 2016. Use the statcode now, but this is a String.
				// Note that the SLD needs to use the statcode as well.
				// So that the SLD does parse the integer value the same, to use the same ID value in the end.
				// Geoserver has Filter Functions to accomplish this.

				// Deprecatad:
				// var iccode=parseInt(prop['id']);

				// New:
				// parse the numeric value from the statcode
				var iccode = parseInt(prop['statcode'].match(/\d+$/)[0])
				stage.variableValues[iccode]=prop[dim];
				fnames[iccode]="id: "+iccode+"<br>statcode: "+prop.statcode+"<br>statnaam: "+prop.statnaam;
			}

			var lngth=stage.variableValues.length;
			if (lngth==0 || (lngth==1)) {stage.clearLayer();return;}
			cache.variableValues=stage.variableValues;
			stage.cache[stage.selectedLevelDatum]["feature_name"]=fnames;
			data='<data><lt>'+stage.layerTable+'</lt>\
			<cb></cb>\
			<ndc>2</ndc>\
			<snd></snd>\
			<slo></slo>\
			<cp>{"n":"Oranges","c":["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"]}</cp>\
			<cm>4</cm>\
			<nc>5</nc>\
			<stats>{"min":0,"max":5728.6}</stats>\
			<cpi></cpi></data>';
			if (data!="")
			{
				var dc=parseInt($(data).find("ndc:first").html());
				cache.snd=$(data).find("snd:first").html()
				for (var i=0;i<lngth;++i)
				{
					var value=stage.variableValues[i];
					if (!isNaN(value)) stage.variableValues[i]=parseFloat(parseFloat(value).toFixed(dc));
				}
				if (stage.init_legend(data))
				{
					stage.layerTable=$(data).find("lt:first").html();
					cache.legendData=data;
					cache.slo=$(data).find("slo:first").html();
					$('#slo').html(numberWithCommas3(parseFloat(cache.slo).toFixed(cache.dc)));
					cache.layerTable=stage.layerTable;
					stage.overlay();
				}
				else
				{
					$('#legend').empty();
				}
				$('#progress').hide();
			}
		}
	});

	}});
}
stage.clearLayer=function()
{
	if (map.overlayMapTypes.length>0) map.overlayMapTypes.removeAt(0);
	$('#legend').empty();
	$('#progress').hide();
	$('#content-selection').hide();
	$('#select-content').show();
}

stage.overlay=function(update)
{
	if (map.overlayMapTypes.length>0) map.overlayMapTypes.removeAt(0);

	var cache=stage.getVariableCache();
	if (cache!=null) stage.specialValues=cache.specialValues;

	stage.the_overlay=stage.overlays[stage.selectedLevelDatum];
	if (stage.the_overlay===undefined)
	{
		stage.the_overlay=new LevelMapType(new google.maps.Size(256, 256));
		stage.overlays[stage.selectedLevelDatum]=stage.the_overlay;
	}
	else if (update===undefined || update===true)
	{
		var a=stage.the_overlay.cache;
		for (var zi in a)
		{
			var z=a[zi];
			for (var xi in z)
			{
				var x=z[xi];
				for (var yi in x) x[yi].r=true;
			}
		}
	}
	stage.saveColorsAndClasses();
	map.overlayMapTypes.insertAt(0,stage.the_overlay);
	stage.setOpacity(stage.opacity,'overlay');
	stage.init_mouse_move_info();
}

stage.init_variables_menu=function(menu_html)
{
	$('#variables-menu').html(menu_html);
	$('#variables-menu').find("li:not([href]) > a").click(function(e){e.stopPropagation();});
	$('#variables-menu').find("li[href] > a").click(function(e){
		e.preventDefault();
		stage.onVariableSelected($(this),$(this).parent().attr('href'));
	});
	stage.clearLayer();

	if (stage.selectedVariable!=null)
	{
		var menuItems=$('#variables-menu').find("li[href="+stage.selectedVariable+"]");
		if (menuItems.length>0)
			menuItems.find("a:first").trigger('click');
		else
		{
			var aliases=stage.aliases[stage.selectedVariable];
			if (aliases===undefined)
			{
				$.get(stage.host+"index.php?r=site/variableAliases",{tag_id:stage.selectedVariable},function(data)
				{
					aliases=jQuery.parseJSON(data);
					stage.aliases[stage.selectedVariable]=aliases;
					stage.triggerAlias(aliases);
				});
			}
			else
			{
				stage.triggerAlias(aliases);
			}
		}
	}
}
stage.triggerAlias=function(aliases)
{
	var ln=aliases.length;
	for (var i=0;i<ln;++i)
	{
		var menuItems=$('#variables-menu').find("li[href="+aliases[i]+"]");
		if (menuItems.length>0)
		{
			stage.selectedVariable=aliases[i];
			menuItems.find("a:first").trigger('click');
			return;
		}
	}

}
stage.saveColorsAndClasses=function()
{
	var cache=stage.getVariableCache();
	if (cache!=null)
	{
		cache.cba=stage.cba;
		cache.colors=stage.colors;
	}
}
stage.onLevelDatumSelected=function(id)
{
	stage.selectedLevelDatum=id;
	stage.onVariableSelected();
}
stage.ap_stop=function()
{
	if (stage.auto_play!==undefined)
	{
		window.clearInterval(stage.auto_play.ap_timer);
		delete stage.auto_play;
	}
}
stage.ap_play=function()
{
	stage.ap_stop();
	var active=$('#level-datum li.active');
	if (active.length!=1) return;
	stage.auto_play={};
	stage.auto_play.lngth=$('#level-datum').find("li").length;
	stage.auto_play.cinx=$('li').index(active)+2;
	stage.auto_play.ap_timer=window.setInterval( function(){
		$('#level-datum').find("li:nth-child("+stage.auto_play.cinx+") > a").trigger('click');
		stage.auto_play.cinx++;
	}, 2500);
	return;
}
stage.init_paginationWidget=function(_id,data,fun)
{
	$('#'+_id).replaceWith(data);
	//$('#level-datum ul').append('<button id="ap-stop" class="btn btn-mini" title="'+stage.trans['sc.stop']+'"><i class="icon-stop"></i></button><button id="ap-play" class="btn btn-mini" title="'+stage.trans['sc.play']+'"><i class="icon-play"></i></button>');
	$('#ap-stop').click(function(){stage.ap_stop();});
	$('#ap-play').click(function(){stage.ap_play();});
	pagination(_id, fun);

	var page_link;
	if (stage.selectedLevelDatum!=null && stage.selectedVariable!=null)
		page_link="a[id="+stage.selectedLevelDatum+"]";
	else if (stage.selectedLevelDatum==null && stage.previouslySelectedLevelDatumText!=null && stage.previouslySelectedLevelDatumText!="" && stage.selectedVariable!=null)
		page_link="a:contains('"+stage.previouslySelectedLevelDatumText+"')";
	else
		page_link="li:nth-child("+($('#level-datum').find("li").length)+") > a";

	if($('#level-datum').find(page_link).length==0) page_link="li:nth-child("+($('#level-datum').find("li").length)+") > a";

	$('#level-datum').find(page_link).trigger('click','trigg');

	if (stage.iframe)
	{
		$('#level-datum').find("li:not('.active')").hide();
		$('#level-datum li.active > a').off();
		$('#ap-stop,#ap-play').hide();
	}

	//$('#progress').hide();
}
stage.setVariablePaginationWidget=function(control_id,fun)
{
	$('#progress').show();
	var cache=stage.getLevelVariableCache();
	if (cache.pagination===undefined)
	{
		var variableData=tjsdata[stage.selectedVariable];
		var icd=variableData['url'];
		$.get(stage.getGDASLink(icd),function(data){
			var years=[];
			$(data).find("Attributes Column").each(function(){
				  if ($(this).attr('name') != 'Perioden') {
						years.push($(this).attr('name'));
					}
					// todo
					//years.push(2014);
				});
			//years.sort();
			// console.log(years);

			var pw="<div id='level-datum' class='pagination pagination-small' style='margin: 5px 0;'><ul>";

			for (var i=0;i<years.length;++i) {
				pw+="<li><a href='#' id='dim_"+years[i]+"'>"+years[i]+"</a></li>";
			}
			pw+="</ul></div>";

			data=pw;
			cache.pagination=data;
			cache.dimensions=years;
			stage.init_paginationWidget(control_id,data,fun);
		});
	}
	else
	{
		stage.init_paginationWidget(control_id,cache.pagination,fun);
	}
}

stage.onLevelSelected=function(levelName,href,preserve)
{
	stage.ap_stop();
	stage.abort_ajax_request();
	if ((preserve===undefined || preserve==false) && stage.selectedLevelDatum!=null)
	{
		stage.previouslySelectedLevelDatumText=$('#level-datum').find("a[id="+stage.selectedLevelDatum+"]").text();
		stage.selectedLevelDatum=null;
	}
	stage.selectedLevelId=href;
	$('#level-is-sel-text').html('<b>'+levelName+'</b>');
	var fm=stage.frameworks[parseInt(href)];
	stage.selectedFrameworkURI = $(fm).find('FrameworkURI').html();
	$('#level-is-sel-text').append('<br><b>FrameworkURI:</b>&nbsp'+$(fm).find('FrameworkURI').html());
	$('#level-is-sel-text').append('<br><b>Abstract:</b>&nbsp'+$(fm).find('Abstract').html());
	$('#level-is-sel-text').append('<br><b>FrameworkKey:</b>&nbsp'+$($(fm).find('FrameworkKey')).find('Column').attr('name'));
	$('#level-is-sel-text').append('<br><a target="_blank" href="'+$(fm).find('DescribeDatasetsRequest').attr('xlink:href')+'"><b>DescribeDatasetsRequest</b></a>');

	var southWest = new google.maps.LatLng($(fm).find('South').text(),$(fm).find('West').text());
	var northEast = new google.maps.LatLng($(fm).find('North').text(),$(fm).find('East').text());
	var bounds = new google.maps.LatLngBounds(southWest,northEast);

	$('#select-level').hide();
	$('#level-is-sel').show();

	var cache=stage.getLevelCache();
	if (cache.menu_html===undefined)
	{
		$('#progress').show();
		var data='';

		for(var m in tjsmenu)
		{
			data+='<li class="dropdown-submenu">';
			data+='<a tabindex="-1" href="#">'+m+'</a><ul class="dropdown-menu">';
			var submenu=tjsmenu[m];
			for (var i=0;i<submenu.length;++i) {
				data+=submenu[i];
			}
			data+='</ul></li>';
		}
		data='<menu>'+data+'</menu>';
		cache.menu_html=$(data).html();
		stage.init_variables_menu(cache.menu_html);
		//$('#progress').hide();
	}
	else
	{
		stage.init_variables_menu(cache.menu_html);
	}
}

function supports_canvas() {
  return !!document.createElement('canvas').getContext;
}

stage.infoWindowTemplate=null;
stage.infowindow=null;
stage.cache=[];
stage.cache.level=[];
stage.selected_palette=null;
stage.jqXHRs={};

stage.abort_ajax_request=function($req)
{
	var jqXHRs=stage.jqXHRs;
	if ($req===undefined)
	{
		for (var $r in jqXHRs) jqXHRs[$r].abort();
	}
	else
	{
		var jqXHR=jqXHRs[$req];
		if (jqXHR!==undefined) jqXHR.abort();
	}
}

stage.resetLevel=function()
{
	stage.abort_ajax_request();
	stage.layerTable=null;
	stage.selectedLevelDatum=null;
	stage.previouslySelectedLevelDatumText=null;
	stage.selectedVariable=null;
	stage.selectedVariableLink=null;
	stage.selectedLevelId=null;
	stage.opacity=1.0;
}

$(document).ready(function (){
	tjsdata=jQuery.parseJSON(tjsdata);
	tjsmenu=jQuery.parseJSON(tjsmenu);
	stage.QueryString=QueryString();
	var q=stage.QueryString;
	if (q.lang!==undefined && q.lang!=stage.lang)
	{
		window.location=stage.host+"?r=site/changeLanguage&lang="+q.lang;
		return;
	}
	stage.resetLevel();
	borderLayout();
	if (!supports_canvas()) {
		$('#canvas-error').show();
		alert($('#canvas-error b').text());
		return;
	}
	initMap();
	stage.initSpatialLevelMenu();
	stage.initTransparency();
	stage.init_links();
	stage.init_charts();
	stage.init_update_class_button();
});

stage.initSpatialLevelMenu=function()
{
	$.ajax({
        type: "GET",
				url: TJS_URL + "?service=TJS&version=1.0.0&request=DescribeFrameworks",
				dataType: "xml",
				success: function(data){
					var xmlDoc = $.parseXML( data );
					$xml = $( data );
					stage.frameworks=$xml.find("Framework");
					for (var i=0;i<stage.frameworks.length;++i) {
						var fmtitle=$(stage.frameworks[i]).find('Title').html();
						$('#level-menu').append("<li href='"+i+"'><a data-mid='"+i+"' href='#'>"+fmtitle+"</a></li>");
					}
						$('#level-menu').find("li[href='#']").remove();
						$('#level-menu').find("li[href] > a").click(function(e){
							e.preventDefault();
							stage.onLevelSelected($(this).text(),$(this).parent().attr('href'));
						});
						$('#progress').hide();
						$('#select-level').show();
						var q=stage.QueryString;
						if (q.id!==undefined)
						{
							var x=$('#level-menu').find("li[href='"+q.id+"'] > a")
							stage.selectedVariable=q.tag;
							stage.selectedLevelDatum=q.idl;
							stage.colors_init=q.c.split(",");
							stage.cba_init=q.cba.split(",");
							map.setZoom(parseInt(q.z));
							map.setCenter(new google.maps.LatLng(parseFloat(q.lat),parseFloat(q.lng)));
							map.setMapTypeId(q.t);
							stage.opacity=q.o;
							stage.onLevelSelected(x.text(),q.id,true);
						}
				}
		});
}

stage.sortArray=function (all,dsc)
{
	all.sort(function(a, b) {
	  return a[0] - b[0];
	});

	if (dsc===true) all.reverse();
}

stage.drawChart=function(ids,dsc)
{
	var selectedGroup=stage.groups[stage.selectedGroupInx];
	var cache=stage.getVariableCache2(selectedGroup.variable,selectedGroup.levelDatum);
	if (cache==null) return;
	var sgid=stage.groups[stage.selectedGroupInx].id;
	if (ids==null) ids=stage.groups[stage.selectedGroupInx].ids;
	var chid="chart-"+sgid;
	if (dsc===undefined) dsc=$("#dsc-"+sgid).hasClass('active');
	$('#'+chid).replaceWith('<canvas id="'+chid+'" width="280" height="250"></canvas>');
	var ctx = document.getElementById(chid).getContext("2d");
	var featureNames=stage.getVariableCache2("feature_name",stage.selectedLevelDatum);

	var all=[];
	for (var key in ids)
	{
		if (featureNames!=null)
		{
			featureName=featureNames[key];
			var afn=featureName.split('<br>');
			if (afn.length>1) {
				featureName=afn[1].replace('NUTS_CODE:','').trim();
			}

		}
		else
			featureName="GID_"+key;

		all.push([cache.variableValues[parseInt(key)-1],featureName]);
	}

	stage.sortArray(all,dsc)

	var labels=[];
	var dsdata=[];

	var len=all.length;
	$('#nitems-'+sgid).html(len+"&nbsp;");
	var aldiv=$('#alert-'+sgid);
	if (len>20)
	{
		len=20;
		aldiv.html(stage.trans['alert20-txt']);
		aldiv.attr('title',stage.trans['alert20-title']);
	}
	else
	{
		aldiv.empty();
		aldiv.removeAttr('title');
	}

	for (var i=0;i<len;i++)
	{
		labels.push(all[i][1]);
		dsdata.push(all[i][0]);
	}

	var data = {
	labels : labels,
	datasets : [
		{
			fillColor : stage.chart_bar_color,
			strokeColor : stage.chart_bar_color,
			pointColor : stage.chart_bar_color,
			pointStrokeColor : "#fff",
			data : dsdata
		}
		]
	}

	var myNewChart = new Chart(ctx).Bar(data,{barValueSpacing : stage.chart_bar_spacing});
}

stage.init_charts=function()
{
	;
}

stage.deepLink=function()
{
	var loc=window.location;
	var zoom=map.getZoom();
	var center=map.getCenter();
	return loc.protocol+"//"+loc.host+loc.pathname+"?id="+stage.selectedLevelId+"&idl="+stage.selectedLevelDatum+"&tag="+stage.selectedVariable+"&cba="+
	stage.cba+"&c="+stage.colors.join(",").replace(/#/g,"")+"&o="+stage.opacity+"&lang="+stage.lang+
	"&t="+map.getMapTypeId()+"&z="+zoom+"&lat="+center.lat()+"&lng="+center.lng();
}

stage.set_selected_palette=function(pal_name)
{
	stage.selected_palette={"n":pal_name,"c":{}};
	for (var i=3;i<=12;++i)
	{
		var pal=$(".noe-"+i+" input[data-name='"+pal_name+"']");
		if (pal.length>0) stage.split_rgb2hex(pal.val(),stage.selected_palette);
	}
}

stage.save2png=function()
{
	if (stage.the_overlay===undefined) return;
	stage.export2png();
}

stage.groups=[];
stage.selectedGroupInx=null;
stage.group=function(id,levelId,levelDatum,variable)
{
	this.id=id;
	this.selection=null;
	this.levelDatum=levelDatum;
	this.levelId=levelId;
	this.variable=variable;
	this.updated=true;
	this.ga=[];
	this.ids=[];

	var selectedGroup=stage.groups[stage.selectedGroupInx];
	if (stage.selectedGroupInx !=null && selectedGroup!==undefined)
	{
		if (selectedGroup.levelDatum==this.levelDatum)
		{
			var selectedGroupGa=selectedGroup.ga;
			var len=selectedGroupGa.length;
			for (var i=0;i<len;++i) this.ga.push(stage.clone(selectedGroupGa[i]));
			this.ids = $.extend(true, [], selectedGroup.ids);
		}
	}
}

stage.clone=function(s)
{
	var type=s.type;
	if (type!='m' && type!='r' && type!='p' && type!='c') return null;

	var opt={fillColor: s.fillColor,
		fillOpacity: s.fillOpacity,
		strokeWeight: s.strokeWeight,
		clickable: true,
		editable: true,
		suppressUndo:true,
		zIndex: s.zIndex};

	var clone=null;
	if (type=='m') {
		clone=new google.maps.Marker(opt);
		clone.setPosition(s.getPosition());
		clone.mid=s.mid;
	}
	else if (type=='p') {
		clone=new google.maps.Polygon(opt);
		clone.setPath(s.getPath().getArray());
		google.maps.event.addListener(clone,'click',function(){stage.setSelection('p',clone);});
		google.maps.event.addListener(clone.getPath(), 'set_at', function(){stage.onShapeChanged();});
		google.maps.event.addListener(clone.getPath(), 'insert_at', function(){stage.onShapeChanged();});
	}
	else if (type=='r') {
		opt.bounds=s.bounds;
		clone=new google.maps.Rectangle(opt);
		google.maps.event.addListener(clone,'click',function(){stage.setSelection('r',clone);});
		google.maps.event.addListener(clone, 'bounds_changed', function(){stage.onShapeChanged();});
	}
	else if (type=='c') {
		clone=new google.maps.Circle(opt);
		clone.setCenter(s.getCenter());
		clone.setRadius(s.getRadius());
		google.maps.event.addListener(clone,'click',function(){stage.setSelection('c',clone);});
		google.maps.event.addListener(clone, 'radius_changed', function(){stage.onShapeChanged();});
		google.maps.event.addListener(clone, 'center_changed', function(){stage.onShapeChanged();});
	}

	if (clone!=null)
	{
		if (type!='m')
		{
			clone.setMap(map);
			clone.setEditable(false);
		}
		clone.type=type;
		clone.add=s.add;
	}

	return clone;
}

stage.onDrawingModeSelected=function(mode)
{
	stage.drawingManager.setDrawingMode(mode);
}

stage.resetDrawingControl=function()
{
	$('#circ').find('img').css('top', '-160px');
	$('#shape').find('img').css('top', '-64px');
	$('#rect').find('img').css('top', '-16px');
	$('#point').find('img').css('top', '-176px');
}

stage.aggregate_sum=function(sgids,cache)
{
	var sum=0;
	for (var id in sgids)
	{
		sum=sum+cache.variableValues[parseInt(id)-1];
	}
	return sum;
}

stage.drawAggregate=function()
{
	var dsdata=[];
	var labels=[];
	var legend=[];
	var len=stage.groups.length;
	var tds=[];
	var ids=[];
	for (var i=0;i<len;++i)
	{
		var group=stage.groups[i];
		tds.push(group.variable);
		var idg={};
		var adg=[];
		for (var id in group.ids) adg.push(id);
		idg[group.levelDatum]=adg;
		ids.push(idg);
	}

	$.post(stage.host+"admin/index.php?r=general/aggregate",{'tds':JSON.stringify(tds),'ids':JSON.stringify(ids)}).done(function(data)
	{
		var r=jQuery.parseJSON(data);
		var len=r.length;
		for (var i=0;i<len;++i)
		{
			if (r[i]=="")
			{
				var group=stage.groups[i];
				var sgids=group.ids;
				var cache=stage.getVariableCache2(group.variable,group.levelDatum);
				if (sgids===undefined || sgids.length==0) continue;
				dsdata.push(stage.aggregate_sum(sgids,cache));
			}
			else
			{
				dsdata.push(r[i]);
			}

			labels.push(i+1);
			legend.push("<p><b>"+(i+1)+"</b>&nbsp;&nbsp;&nbsp;"+$('#acc-'+stage.groups[i].id).text()+"</p>");
		}

		$('#aggregate-chart').replaceWith('<canvas id="aggregate-chart" height="250px" style="width:100%"></canvas>');

		var ctx = document.getElementById("aggregate-chart").getContext("2d");
		var gdata = {
		labels : labels,
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : dsdata
			}
			]
		}

		var myNewChart = new Chart(ctx).Bar(gdata);

		$("#aggregate-modal #legend").html("<div>"+legend.join("")+"</div>");

	}).fail(function(jqXHR)
	{
		$('#aggr-status').html(jqXHR.responseText);
		return;
	});
}

stage.selectView=function(levelId,levelDatum,tag_id)
{
	stage.selectedVariable=tag_id;
	stage.selectedLevelDatum=levelDatum;
	stage.onLevelSelected($('#level-menu').find("li[href='"+levelId+"'] > a").text(),levelId,true);
}

stage.onAccTabClicked=function(gc)
{
	var ogroup=stage.groups[stage.selectedGroupInx];
	var updated=false;
	if (ogroup!==undefined)
	{
		updated=ogroup.updated;
		ogroup.updated=true;
		var len=ogroup.ga.length;
		for (var i=0;i<len;i++) ogroup.ga[i].setMap(null);
	}
	stage.selectedGroupInx=stage.groupId2Inx(gc);
	var selectedGroup=stage.groups[stage.selectedGroupInx];

	if (selectedGroup.levelId!=stage.selectedLevelId ||
		selectedGroup.levelDatum!=stage.selectedLevelDatum ||
		selectedGroup.variable!=stage.selectedVariable) {
		stage.selectView(selectedGroup.levelId,selectedGroup.levelDatum,selectedGroup.variable);
	}

	if (selectedGroup.ga!==undefined)
	{
		var len=selectedGroup.ga.length;
		for (var i=0;i<len;i++)
		{
			var shape=selectedGroup.ga[i];
			if (shape.type!='m') shape.setMap(map);
		}
	}

	if (selectedGroup.ids!==undefined)
	{
		if (ogroup!==undefined)
		{
			if (ogroup.levelDatum==selectedGroup.levelDatum)
			{
				if (updated)
					stage.drawChart(selectedGroup.ids);
				else
					stage.select_features(selectedGroup.ids);
			}
			else
			{
				;//stage.reshapeMarkerSelections();
				;//stage.onShapeChanged();
			}
		}
	}
}

stage.init_links=function()
{
	/*
	$('#lev-m-root').click(function(){
		if (stage.selectedLevelId===null) return;
		$('#level-menu').find('a').removeClass('show-selection');
		$('#level-menu').find("li[href='"+stage.selectedLevelId+"'] > a").addClass('show-selection');
	});

	$('#var-m-root').click(function(){
		if (stage.selectedVariable===null) return;
		$('#variables-menu').find('a').removeClass('show-selection');
		$('#variables-menu').find('li.dropdown-submenu').removeClass('open');
		$('#variables-menu').find("li[href='"+stage.selectedVariable+"'] > a").addClass('show-selection').parents("li.dropdown-submenu").addClass('open').addClass('show-selection');
	});
	*/
	$('#search-place').keyup(function(e){
		if(e.keyCode == 13)
		{
			codeAddress();
		}
	});

	$('#hand,#circ,#shape,#rect,#point').click(function(){
		stage.resetDrawingControl();
		stage.setSelection(null,null);
		var id=$(this).attr('id');
		var mode=null;

		if (id!='hand') {
			if (stage.delineation_overlay!==undefined)
			{
				if (stage.delineation_overlay.overlay.type=='c') stage.radius_infowindow.close();
				stage.delineation_overlay.overlay.setVisible(false);
			}
		}

		if (id=='circ')
		{
			mode=google.maps.drawing.OverlayType.CIRCLE;
			$(this).find('img').css('top','0px');
		}
		else if (id=='shape')
		{
			mode=google.maps.drawing.OverlayType.POLYGON;
			$(this).find('img').css('top','-96px');
		}
		else if (id=='rect')
		{
			mode=google.maps.drawing.OverlayType.RECTANGLE;
			$(this).find('img').css('top','-48px');
		}
		else if (id=='point')
		{
			mode=google.maps.drawing.OverlayType.MARKER;
			$(this).find('img').css('top','-112px');
		}
		else if (id=='hand')
		{
			if (stage.delineation_overlay!==undefined)
			{
				stage.delineation_overlay.overlay.setVisible(true);
				var shape=stage.delineation_overlay.overlay;
				stage.setSelection(shape.type,shape);
				if (shape.type=='c' && shape==stage.radius_infowindow.shape)
				{
					stage.radius_infowindow.open(map);
					$('#radius').val(stage.formatRadius(shape));
				}

			}
		}
		stage.onDrawingModeSelected(mode);
	});

	$('#remove-shape').click(function()
	{
		var groups=stage.groups[stage.selectedGroupInx].ga;
		if (stage.groups[stage.selectedGroupInx].selection!=null)
		{
			if (groups!==undefined)
			{
				var i=groups.indexOf(stage.groups[stage.selectedGroupInx].selection);
				groups.splice(i, 1);
			}

			stage.groups[stage.selectedGroupInx].selection.setMap(null);
			delete stage.groups[stage.selectedGroupInx].selection;
			stage.groups[stage.selectedGroupInx].selection=null;
			stage.onShapeChanged();
		}
		else
		{
			if (groups!==undefined)
			{
				var sids=stage.groups[stage.selectedGroupInx].ids;
				var len=groups.length-1;
				for (var i=len; i>=0;--i) {
					var shape=groups[i];
					if (shape.type=='m')
					{
						if (sids[shape.mid]!==undefined) delete sids[shape.mid];
						groups.splice(i, 1);
					}
				}
				stage.select_features(sids);
			}
		}
		$(this).blur();
	});

	$('#show-shapes').click(function()
	{
		var visible=$(this).hasClass("s_show");
		var swap_trans=function(that){var t=stage.trans["show_selectors"];
			stage.trans["show_selectors"]=$(that).attr('title');
			$(that).attr('title',t);};

		var icon="";
		if (visible)
		{
			icon='<i class="icon-eye-close"></i>';
			$(this).removeClass("s_show");
			$(this).addClass("s_hide");
			swap_trans(this);
		}
		else
		{
			icon='<i class="icon-eye-open"></i>';
			$(this).removeClass("s_hide");
			$(this).addClass("s_show");
			swap_trans(this);
		}

		$(this).html(icon);

		if (stage.groups[stage.selectedGroupInx].ga!==undefined)
		{
			var len=stage.groups[stage.selectedGroupInx].ga.length;
			for (var i=0;i<len;i++)
			{
				var shape=stage.groups[stage.selectedGroupInx].ga[i];
				shape.setVisible(visible);
			}
		}
		$(this).blur();
	});

	$('#addition').click(function()
	{
		var selection=stage.groups[stage.selectedGroupInx].selection;
		if (selection!=null)
		{
			if (selection.type=='m')
			{
				stage.select_feature(selection.mid,true);
				selection.setOptions({icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'});
			}
			else
			{
				selection.setOptions({'fillColor':'#ffff00'});
				selection.add=true;
				stage.onShapeChanged();
			}
		}
		if ($(this).hasClass("active")) return;
		$(this).addClass("active");
		$('#subtraction').removeClass("active");
	});

	$('#subtraction').click(function()
	{
		var selection=stage.groups[stage.selectedGroupInx].selection;
		if (selection!=null)
		{
			selection.add=false;
			if (selection.type=='m')
			{
				selection.setOptions({icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'});
				stage.select_feature(selection.mid,false);
			}
			else
			{
				selection.setOptions({'fillColor':'red'});
				stage.onShapeChanged();
			}
		}
		if ($(this).hasClass("active")) return;
		$(this).addClass("active");
		$('#addition').removeClass("active");
	});

	$('#aggregate-modal').on('shown', function () {
		stage.drawAggregate();
	})

	$('#close-delineation').click(function(){
		theLayout.hide('east');
		stage.clear_selection();
		stage.drawingManager.setMap(null);
	});

	$('#add-a-group').click(function(){
		$('#cselect').show();
		$('#aggregate').show();
		var gc=Date.now();
		var snd=stage.get_snd();
		$('#accordion2').append(('<div class="accordion-group" id="accg-%1">\
			<div class="accordion-heading">\
				<a id="acc-%1" class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#data-group-%1">'+
					(snd==""?stage.selectedVariableDescription:snd)+", "+$('#level-datum').find(".active").text()+
					'<i id="remove-group-%1" class="icon-remove pull-right"></i>\
				</a>\
			</div>\
			<div id="data-group-%1" class="accordion-body collapse">\
				<div class="accordion-inner" style="padding: 5px 5px">\
					<div class="btn-group" data-toggle="buttons-radio">\
						<button id="dsc-%1" type="button" title="'+stage.trans['sc.sort.descending']+'" class="dsc btn btn-mini active"><i class="icon-arrow-down"></i></button>\
						<button id="asc-%1" type="button" title="'+stage.trans['sc.sort.ascending']+'" class="asc btn btn-mini"><i class="icon-arrow-up"></i></button>\
					</div>\
					<div id="alert-%1" class="pull-right"></div>\
					<div class="pull-right" id="nitems-%1" title="'+stage.trans['delin-n-items-title']+'">0</div>\
					<div class="pull-right" title="'+stage.trans['delin-n-items-title']+'">'+stage.trans['delin-n-items-txt']+'</div>\
					<canvas id="chart-%1" width="280" height="250"></canvas>\
				</div>\
			</div>\
		</div>').replace(/%1/g,gc));

		var theGroup=new stage.group(gc,stage.selectedLevelId,stage.selectedLevelDatum,stage.selectedVariable);
		stage.groups.push(theGroup);

		$('.asc,.dsc').on('click',function() {
			stage.drawChart(null,$(this).hasClass('dsc'));
		});

		stage.onAccTabClicked(gc);
		$('#acc-'+gc).trigger('click');
		$('#acc-'+gc).on('click', function (e) {
			if($('#accg-'+gc+' .accordion-body').hasClass("in"))
			{
				e.stopPropagation();
				e.preventDefault();
				return;
			}
			stage.onAccTabClicked(gc);
		});

		$('#remove-group-'+gc).click(function(){
			$(this).parent().parent().parent().remove();
			if ($("#accordion2").find('.in').length!=1) $('#cselect').hide();
			var rgi=stage.groupId2Inx(gc);
			var removedGroup=stage.groups[rgi];
			if (removedGroup.ga!==undefined)
			{
				var len=removedGroup.ga.length;
				for (var i=0;i<len;i++)
				{
					var shape=removedGroup.ga[i];
					shape.setMap(null);
					shape=null;
				}
			}
			stage.groups.splice(rgi,1);
			removedGroup=null;

			if (stage.groups.length==0) {
				stage.clear_selection();
				stage.groups=[];
				stage.selectedGroupInx=null;
				$('#aggregate').hide();
				$('#cselect').hide();
				return;
			}

			if (rgi==stage.selectedGroupInx)
			{
				stage.selectedGroupInx=null;
				var nid="";
				if (rgi>0 && rgi<stage.groups.length)
					nid=stage.groups[rgi-1].id;
				else
					nid=stage.groups[0].id;
				$('#acc-'+nid).trigger('click');
			}
			else if (stage.selectedGroupInx>rgi) {
				stage.selectedGroupInx--;
			}
		});
		$(this).blur();
	})


	$('#auto-zoom').click(function(){
		if ($(this).prop("checked"))
		{
			if (stage.azooms===undefined)
			{
				var lids="";
				$('#level-menu > li').each(function(){
					var href=$(this).attr('href');
					if (href!==undefined) lids+=href+",";});
				$.get(stage.host+"admin/?r=layer/autoZoomSpans",{ids:lids},function(data){
					var r=jQuery.parseJSON(data);
					stage.azooms=[];
					for (var i=0;i<r.length;i++) stage.azooms[r[i][0]]=[r[i][1],r[i][2]];
					stage.auto_zoom=true;
				});
			}
			else
				stage.auto_zoom=true;

			$('#level-menu').find('li').hide();
			$('#automatic-zoom').show();
		}
		else
		{
			stage.auto_zoom=false;
			$('#level-menu').find('li').show();
		}
	});

	$('#delineation').click(function(){
		theLayout.show('east');
		stage.drawingManager.setMap(map);
		if (stage.selectedGroupInx!=null) {
			var ids=stage.groups[stage.selectedGroupInx].ids;
			if (ids!==undefined && ids.length>0) {
				stage.select_features(ids);
			}
		}
	});

	$('#clear-all-groups').click(function(){
		var len = stage.groups.length;
		for (var i=0;i<len;++i)
		{
			var removedGroup=stage.groups[i];
			if (removedGroup.ga!==undefined)
			{
				var len2=removedGroup.ga.length;
				for (var j=0;j<len2;j++)
				{
					var shape=removedGroup.ga[j];
					shape.setMap(null);
					shape=null;
				}
			}

			removedGroup=null;
		}

		$('#accordion2').empty();
		$('#cselect').hide();
		$('#aggregate').hide();
		stage.groups=[];
		stage.selectedGroupInx=null;
		stage.clear_selection();
		$(this).blur();
	});

	// Quick&dirty hack
	$('#custom-dataset-button').click(function() {
		var custom_url = $('#custom-dataset-url').val();
		tjsdata[2] = {"ICD10": "custom", "definition": "Custom URL", "url": custom_url};
		$('a:contains("Custom URL")').click();

	});

	$('#deep-linking').click(function(){
		$('#modal-header').html(stage.trans['share-map']);
		$('#modal-body').html('<div>'+stage.trans['share-link']+'</div>'+'<input id="deep-link" type="text" style="width:98%" value="'+stage.deepLink()+'">');
		$('#modal-body').append('<div>'+stage.trans['share-embed']+'</div>'+'<textarea rows="6" id="embed" style="width:98%;max-width: 98%; font-family: monospace;"><iframe width="800" height="600" src="'+stage.deepLink()+'&iframe=1" frameborder="0" allowfullscreen></iframe></textarea>');
		$('#deep-link, #embed').focus(function() { $(this).select() }).mouseup(function(e){e.preventDefault();});
		$('#modal').modal();
	});

	$('#export').click(function(){
		$('#modal-header').html(stage.trans['export']);
		$('#modal-body').empty();
		$('#modal-body').append('<form id="export-form" action="'+stage.host+"/admin/?r=general/export"+'" method="POST"><input type="text" name="img" id="img"><input type="text" name="shp" id="shp"></form>');
		$('#modal-body > #export-form').hide();
		$('#modal-body').append('<button id="export-image" class="btn" style="width:100%">'+stage.trans['export_image']+'</button>');
		$('#export-image').click(function()
								 {
									$('#modal-body > #export-form > #shp').remove();
									$('#modal-body > #export-form > #img').val($('#modal-body img:first').attr('src'));
									$('#modal-body > #export-form').submit();
									$('#modal-body').html("");
									$('#modal').modal('hide');
								 });
		$('#modal-body').append('<button id="export-shp" class="btn" style="width:100%">'+stage.trans['export_shp']+'</button>');
		$('#export-shp').click(function()
								 {
									$('#modal-body > #export-form > #img').remove();
									$('#modal-body > #export-form > #shp').val('{"idld":"'+stage.selectedLevelDatum+'","tag_id":"'+stage.selectedVariable+'","table":"'+stage.layerTable+'"}');
									$('#modal-body > #export-form').submit();
									$('#modal-body').html("");
									$('#modal').modal('hide');
								 });
		stage.save2png();
		$('#modal').modal();
	});

	$('#settings-color').click(function(){
		$('#modal-header').html(stage.trans['color-catalogue']);
		$('#modal-body').html('ccat');
		$('#modal').modal();
	});

	$('#modal').on('shown', function() {
		if ($('#modal-body').html()!=='ccat') return;
		var s=stage.nclasses;
		if (stage.selectedLevelDatum!=null && stage.cache[stage.selectedLevelDatum]!==undefined &&
			stage.cache[stage.selectedLevelDatum][stage.selectedVariable]!==undefined &&
			stage.cache[stage.selectedLevelDatum][stage.selectedVariable].nc!==undefined) s=stage.cache[stage.selectedLevelDatum][stage.selectedVariable].nc;

			if (stage.catalogue===undefined)
			{
				$.get(stage.host+"admin/?r=general/catalogue",{s:s},function(data){
					stage.catalogue=data;
					stage.render_catalogue(stage.catalogue);
				});
			}
			else
				stage.render_catalogue(stage.catalogue);
		});
}

stage.groupId2Inx=function(id)
{
	var len=stage.groups.length;
	for(var i=0;i<len;++i)
	{
		if (stage.groups[i].id==id) return i;
	}
	return null;
}

stage.render_catalogue=function(data)
{
	$('#modal-body').html(data);
	$('input:radio[name="cor"]').change(function(){
		var that=$(this);
		if (that.is(':checked'))
		{
			stage.set_selected_palette(that.attr('data-name'));

			$('#modal').modal('hide');
			stage.unsetCache('colors');
			stage.cachedVariable(true);
		}
	});
	$('#noe').change(function(){
		var $cn=$('#noe option:selected').first().val();
		$('[class^="noe-"]').hide();
		$('.noe-'+$cn).show();
	});
}

stage.split_rgb2hex=function(data,obj)
{
	var c=data.split("\t");
	var lc=c.length;
	var palette=[];
	for (var i=0;i<lc;++i)
	{
		var crgb=c[i].split(",");
		var chex=rgbToHex(parseInt(crgb[0]),parseInt(crgb[1]),parseInt(crgb[2]));
		palette.push(chex);
	}
	obj.c[palette.length]=palette;
}

function pagination(id,_onItemClicked)
{
	$('#'+id).pagination({onItemClicked:_onItemClicked});
}

function QueryString() {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    	// If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
    	// If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
    	// If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  }
    return query_string;
}

stage.getDefaultValues=function()
{
	stage.dvals={
	'chart_bar_color':"rgba(0, 51, 102, 1)",
	'chart_bar_spacing':"2",
	'color_palette':'{"n":"OrRd","c":{"3":["#fee8c8","#fdbb84","#e34a33"],"4":["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],"5":["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],"6":["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],"7":["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],"8":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],"9":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]}}',
'nclasses':"5",
'special_values':[]};

	stage.specialValues(stage.dvals['special_values']);
	stage.nclasses=stage.dvals['nclasses'];
	stage.color_palette=stage.dvals['color_palette'];
	stage.chart_bar_color=stage.dvals['chart_bar_color'];
	stage.chart_bar_spacing=stage.dvals['chart_bar_spacing'];
}

stage.specialValues=function(r)
{
	stage._specialValues=[];
	var len=r.length;
	for (var i=0;i<len;i++) stage._specialValues[r[i].value]={'c':tinycolor(r[i].color).toRgb(),'t':r[i].text};
}

//http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, stage.separator);
}

function numberWithCommas3(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, stage.separator);
    return parts.join(stage.decimal);
}

function fromLatLngToTile(proj,zoom,c)
{
	var p = proj.fromLatLngToPoint(c);
	var k = Math.pow(2, zoom)/256.0;
	var dtile={x:p.x*k,y:p.y*k};
	var tile={x:Math.floor(dtile.x),y:Math.floor(dtile.y)};
	return tile;
}
