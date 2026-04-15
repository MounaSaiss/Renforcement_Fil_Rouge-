<?php
class CompteBancaire{
    private $tituliaire ;
    private $iban;
    private $solde;

    public function __construct($tituliaire,$iban,$solde=null){
        $this->tituliaire=$tituliaire;
        $this->iban=$iban;
        $this->solde=$solde;
    }
    public function getTitulaire(){
        return $this->tituliaire;
    }
    public function getIban(){
        return $this->iban;
    }
    public function getSolde(){
        return $this->solde;
    }
    public function deposer($montant){
        if($montant<0){
            echo "solde Invalide ";
            return;
        }
            $this->solde+=$montant;
        echo "Montant added With succées";
    }
    public function retirer($montant){
        if($montant <= 0){
            echo "Montant Invalide";
            return;
        }
        else if ( $this->solde < $montant){
            echo "solde Insuffissanr ";
            return ;
        }
        else {
            $this->solde-=$montant;
            echo "Operation effectuer with succées";
        }
    }
    public function AfficheInfos(){
        echo " Tituliaire est ".$this->tituliaire ." le IBN du Compte : ".$this->iban." le solde :".$this->solde. " DH";
    }
}
$compte1=new CompteBancaire("Mouna","MA64 0112 3456 7890 1234 5678",2000);
$compte1->AfficheInfos();
$compte1->deposer(500);
$compte1->retirer(1000);
$compte1->AfficheInfos();
$compte1->retirer(3000);



