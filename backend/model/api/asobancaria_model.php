<?php

class Asobancaria_model extends CI_Model{
    public function __construct(){
        parent::__construct();
    }
    
    public function getData($dateInit, $dateEnd) {
        $dateInit = str_replace('-', '/', $dateInit);
        $dateEnd = str_replace('-', '/', $dateEnd);
        $sql = "SELECT C2, C3 FROM V_PLANO_ASOBANCARIA WHERE 
            FECHA BETWEEN TO_DATE('".$dateInit."','DD/MM/YYYY') AND TO_DATE('".$dateEnd."','DD/MM/YYYY')";
        $this->db->db_debug = false;
        $query = $this->db->query($sql);
        if ($query != null && $query->num_rows() > 0) {
            $ret = array();
            $i = 0;
			foreach ($query->result_array() as $row) {
                $ret[$i]['C2'] = trim($row['C2']);
                $ret[$i]['C3'] = trim($row['C3']);
                $i++;
			}
			return $ret;
		} else {
			return false;
		}
    }

    public function getDataHistorico($dateInit, $dateEnd) {
        $dateInit = str_replace('-', '/', $dateInit);
        $dateEnd = str_replace('-', '/', $dateEnd);
        $sql = "SELECT C2, C3 FROM V_PLANO_ASOBANCARIA_HISTORICO WHERE 
            FECHA BETWEEN TO_DATE('".$dateInit."','DD/MM/YYYY') AND TO_DATE('".$dateEnd."','DD/MM/YYYY')";
        $this->db->db_debug = false;
        $query = $this->db->query($sql);
        if ($query != null && $query->num_rows() > 0) {
            $ret = array();
            $i = 0;
			foreach ($query->result_array() as $row) {
                $ret[$i]['C2'] = trim($row['C2']);
                $ret[$i]['C3'] = trim($row['C3']);
                $i++;
			}
			return $ret;
		} else {
			return false;
		}
    }
}