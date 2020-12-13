<?php 
    class Asobancaria extends CI_Controller{
        public function __construct() {
            parent::__construct();
            error_reporting(1);
            $this->load->model("api/asobancaria_model");
        }

        public function get($dateInit, $dateEnd) {
            header('Content-Type: application/json');
            echo json_encode($this->asobancaria_model->getData($dateInit, $dateEnd));
        }

        public function history($dateInit, $dateEnd) {
            header('Content-Type: application/json');
            echo json_encode($this->asobancaria_model->getDataHistorico($dateInit, $dateEnd));
        }
    }