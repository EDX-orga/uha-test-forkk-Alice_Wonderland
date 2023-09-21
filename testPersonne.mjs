import {Personne} from './personne.mjs';
import affichagePersonne from './affichagePersonne.mjs'; 

function test1() { 
    const p1 = new Personne({ id: 'TEST001', poids: 70.3, taille: 1.74 });
    console.log(affichagePersonne(p1));

}

function test2() {
    const p2Data = {id: 'TEST002', poids: 62.4, taille: 1.62};
    const p2 = new Personne(p2Data);
    console.log(affichagePersonne(p2));
}

function test3() {
    const p3 = Personne.depuisDonnes('TEST003', 55.3, 1.54);
    console.log(affichagePersonne(p3))
}

function test4(){
    const p3Data =  {id: 'TEST004', poids: 56.3, taille: 1.5};
    const p3Json = JSON.stringify(p3Data);
 
    console.log(p3Json)
    const p3 = Personne.depuisJSON(JSON.parse(p3Json));
    console.log(affichagePersonne(p3));
    
}

function test5() {

    const p5 = new Personne({ id: 'TEST005', poids: 55.3, taille: 1.54 });
    const p5Json = JSON.stringify(p5);
  const personne = Personne.depuisJSON(JSON.parse(p5Json));
  console.log(affichagePersonne(personne));
}


//test1();
//test2();
//test3();
//test4();
test5();
