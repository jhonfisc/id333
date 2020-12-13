CREATE OR REPLACE VIEW "V_PLANO_ASOBANCARIA" AS
SELECT 
    TRIM(DOC.HDVCODIGO) C2,
    SUM(DET.MDIVALUNI) C3,
    DOC.MDOFECHA FECHA
    FROM GAMOVDOC DOC
    JOIN GAMOVDO1 DET
        ON (
            DOC.SUCCODIGO = DET.SUCCODIGO AND
            DOC.DOCCODIGO = DET.DOCCODIGO AND
            DOC.MDONUMERO = DET.MDONUMERO AND
            DOC.MDORESOLU = DET.MDORESOLU
            )
    JOIN GHHOJVID CLI
        ON DOC.HDVCODIGO = CLI.HDVCODIGO
WHERE 
    CLI.HDVPROYEC IN('165','166') AND 
    DOC.DOCCODIGO IN ('RC') AND
    DOC.MDOANULAD = 'N' AND
    DOC.MDOTIPPAG <> '45'
    GROUP BY (DOC.HDVCODIGO, DOC.MDOFECHA);

 CREATE OR REPLACE FORCE VIEW "V_PLANO_ASOBANCARIA_HISTORICO" AS 
  SELECT 
    TRIM(DOC.HDVCODIGO) C2,
    SUM(DET.HDIVALUNI) C3,
    DOC.HDOFECHA FECHA
    FROM GAHIMODO DOC
    JOIN GAHIMOD1 DET
        ON (
            DOC.SUCCODIGO = DET.SUCCODIGO AND
            DOC.DOCCODIGO = DET.DOCCODIGO AND
            DOC.HDONUMERO = DET.HDONUMERO AND
            DOC.HDORESOLU = DET.HDORESOLU
            )
    JOIN GHHOJVID CLI
        ON DOC.HDVCODIGO = CLI.HDVCODIGO
WHERE 
    CLI.HDVPROYEC IN('165','166') AND 
    DOC.DOCCODIGO IN ('RC') AND
    DOC.HDOANULAD = 'N' AND
    DOC.HDOTIPPAG <> '45'
    GROUP BY (DOC.HDVCODIGO, DOC.HDOFECHA);