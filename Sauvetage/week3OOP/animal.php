<?php 

class animal {
    public $nom; 
    public $race; 

    public function __construct($nom,$race) {
        $this->nom=$nom;
        $this->race=$race;
    }
    //  Ajoutez la méthode parler() qui affiche : "[nom] dit : Grr !" 
    public function parler(){
        echo $this->nom ."dit : Grr !";
    }
}

// En dehors de la classe, créez $animal1 = new Animal('Rex', 'Chien') avec new 
$animal1=new animal("Rex","Chien");
$animal2=new animal("Mimi","chat");

echo $animal1->parler();
echo $animal2->parler();
echo $animal1->nom;