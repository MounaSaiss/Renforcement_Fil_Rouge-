<?php
class Produit{
    private $nom ;
    private $prix ; 
    private $stock ; 

    public function __construct($nom,$prix,$stock){
        $this->nom=$nom;
        $this->prix=$prix;
        $this->stock=$stock;
    }
    public function  getNom(){
        return $this->nom;
    }
    public function getPrix(){
        return $this->prix;
    }
    public function getStock(){
        return $this->stock;
    }
    public function setPrix($prix){
        if($prix<0){
            echo "prix invalide";
            return ;
        }
        $this->prix=$prix;
    }
    public function setStock($stock){
        if($stock<=0){
            echo "Stock invalide";
            return ;
        }
        $this->stock=$stock;
    }
    public function afficheProduct(){
        echo $this->nom."__".$this->prix."$"."(stock:".$this->stock.")";
    }

}
$product1=new Produit('clavier',30,12);
$product2=new Produit('ecran',600,2);
$product1->afficheProduct();
$product2->afficheProduct();

$product1->setPrix(-5);
$product2->getNom();
