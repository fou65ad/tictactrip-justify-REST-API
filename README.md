toutes les fonctionnalités ont été implémentées , si vous voulez tester localement ,faites cette installation, sinon tester directement sur https://tictac2.herokuapp.com/ :
- Installation:

```
git clone https://github.com/fou65ad/tictactrip-justify-REST-API.git
```
```
npm install
```
- API test :
```
node server.js 
```
- s'isncrire sur localhost : /api/register méthode Post, body en json : name,email,password
```
curl -d '{"name":"tictactrip","email":"tictac@tictactrip.eu","password":"pass"}' -H 'Content-Type: application/json' http://localhost:3000/api/register
```
- s'isncrire en ligne , sur https://tictac2.herokuapp.com/ :
   ```
  curl -d '{"name":"tictactrip","email":"tictac@tictactrip.eu","password":"pass"}' -H 'Content-Type: application/json' https://tictac2.herokuapp.com/api/register
  ```
  ![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2002-47-06.png)
- login :   /api/login méthode Post, body en json : email,password
 ```
curl -d '{"email":"tictac@tictactrip.eu","password":"pass"}' -H 'Content-Type: application/json' https://tictac2.herokuapp.com/api/login
 ```
après login on on récupère le token (jwt), dont on va utiliser pour consommer la ressource protégée  " https://tictac2.herokuapp.com/api/justify"
   ```
{"auth":true,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTc4NzdmZmFjYTI0MGRiMGFjYjdlYyIsImlhdCI6MTU0MTkwMTM4NywiZXhwIjoxNTQxOTg3Nzg3fQ.RPwo2lFtPvl9E1_VLZutc6zSKA-zcpiOHuL0Oj3jlZM"}
 ```
![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2002-56-30.png)

- justification du texte : /api/login méthode Post, body en json : token,len,input ,retourne l'output + nombre de mots consommés dans cette requête,

par exemple,si je veux justifier le texte suivant avec une longueur de 30 caractères par ligne :
 ```
 input="je suis élève ingénieur en dernière année à l’ENSIAS filière Génie Logiciel et je cherche un PFE"
  ```
la requête est donc  : 
    ```
curl https://tictac2.herokuapp.com/api/justify -d '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTc4NzdmZmFjYTI0MGRiMGFjYjdlYyIsImlhdCI6MTU0MTkwMTM4NywiZXhwIjoxNTQxOTg3Nzg3fQ.RPwo2lFtPvl9E1_VLZutc6zSKA-zcpiOHuL0Oj3jlZM","len":30,"input":"je suis élève ingénieur en dernière année à l’ENSIAS filière Génie Logiciel et je cherche un PFE"}' -H 'Content-Type: application/json' 
    ```
    
    
    
  et la réponse  : 
```
{"output":"je&nbsp;&nbsp;suis&nbsp;&nbsp;élève&nbsp;&nbsp;ingénieur&nbsp;&nbsp;en<br>dernière&nbsp;&nbsp;année&nbsp;&nbsp;à&nbsp;&nbsp;&nbsp;&nbsp;l’ENSIAS<br>filière&nbsp;&nbsp;Génie&nbsp;&nbsp;Logiciel&nbsp;et&nbsp;je<br>cherche&nbsp;un&nbsp;PFE&nbsp;<br>","consommés":17}
```
![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2004-14-42.png)


puis on on interprète les espaces et les new lines par notre navigateur ou par exemple utiliser ce site https://html5-editor.net/

![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2009-43-21.png)

ensuite nous devons copier le resultat dans un éditeur de text sublime,gedit...car les navigateurs, par défaut n'affichent pas les caractères avec la même taille et ignorent les espaces , et voila le résultat final

![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2004-16-48.png)

si vous voulez justifier plusieurs paragraphes , il faut les séparer par "&#x3C;br&#x3E;&#x3C;br&#x3E;" ,par exemple:
si on veut justifier le texte suivant : 

![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2009-12-59.png)
l'input doit être :
```
input ="Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.<br><br>Cette croyance survivait pendant quelques secondes à mon réveil; elle ne choquait pas ma raison, mais pesait comme des écailles sur mes yeux et les empêchait de se rendre compte que le bougeoir n’était plus allumé.Puis elle commençait à me devenir inintelligible, comme après la métempsycose les pensées d’une existence antérieure; le sujet du livre se détachait de moi, j’étais libre de m’y appliquer ou non; aussitôt je recouvrais la vue et j’étais bien étonné de trouver autour de moi une obscurité, douce et reposante pour mes yeux, mais peut-être plus encore pour mon esprit, à qui elle apparaissait comme une chose sans cause, incompréhensible, comme une chose vraiment obscure. Je me demandais quelle heure il pouvait être; j’entendais le sifflement des trains qui, plus ou moins éloigné, comme le chant d’un oiseau dans une forêt, relevant les distances, me décrivait l’étendue de la campagne déserte où le voyageur se hâte vers la station prochaine; et le petit chemin qu’il suit va être gravé dans son souvenir par l’excitation qu’il doit à des lieux nouveaux, à des actes inaccoutumés, à la causerie récente et aux adieux sous la lampe étrangère qui le suivent encore dans le silence de la nuit, à la douceur prochaine du retour."
 ```
 et la requête doit être (longeur de ligne =80 caractères):
  ```
 curl https://tictac2.herokuapp.com/api/justify -d '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTc4NzdmZmFjYTI0MGRiMGFjYjdlYyIsImlhdCI6MTU0MTkwMTM4NywiZXhwIjoxNTQxOTg3Nzg3fQ.RPwo2lFtPvl9E1_VLZutc6zSKA-zcpiOHuL0Oj3jlZM","len":80,"input":"Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.<br><br>Cette croyance survivait pendant quelques secondes à mon réveil; elle ne choquait pas ma raison, mais pesait comme des écailles sur mes yeux et les empêchait de se rendre compte que le bougeoir n’était plus allumé.Puis elle commençait à me devenir inintelligible, comme après la métempsycose les pensées d’une existence antérieure; le sujet du livre se détachait de moi, j’étais libre de m’y appliquer ou non; aussitôt je recouvrais la vue et j’étais bien étonné de trouver autour de moi une obscurité, douce et reposante pour mes yeux, mais peut-être plus encore pour mon esprit, à qui elle apparaissait comme une chose sans cause, incompréhensible, comme une chose vraiment obscure. Je me demandais quelle heure il pouvait être; j’entendais le sifflement des trains qui, plus ou moins éloigné, comme le chant d’un oiseau dans une forêt, relevant les distances, me décrivait l’étendue de la campagne déserte où le voyageur se hâte vers la station prochaine; et le petit chemin qu’il suit va être gravé dans son souvenir par l’excitation qu’il doit à des lieux nouveaux, à des actes inaccoutumés, à la causerie récente et aux adieux sous la lampe étrangère qui le suivent encore dans le silence de la nuit, à la douceur prochaine du retour."}' -H 'Content-Type: application/json'
  ```
  et l'output est comme suit :
  
  
 ![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2009-25-50.png)
  
 vous pouvez choisir la longuer des lignes en utilisant le paramètre "len", par exemple, si on veut justifier le même texte mais  cette fois avec une longeur de ligne de 30 caractères , on utilise la requête suivante :
  ```
 curl https://tictac2.herokuapp.com/api/justify -d '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTc4NzdmZmFjYTI0MGRiMGFjYjdlYyIsImlhdCI6MTU0MTkwMTM4NywiZXhwIjoxNTQxOTg3Nzg3fQ.RPwo2lFtPvl9E1_VLZutc6zSKA-zcpiOHuL0Oj3jlZM","len":30,"input":"Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.<br><br>Cette croyance survivait pendant quelques secondes à mon réveil; elle ne choquait pas ma raison, mais pesait comme des écailles sur mes yeux et les empêchait de se rendre compte que le bougeoir n’était plus allumé.Puis elle commençait à me devenir inintelligible, comme après la métempsycose les pensées d’une existence antérieure; le sujet du livre se détachait de moi, j’étais libre de m’y appliquer ou non; aussitôt je recouvrais la vue et j’étais bien étonné de trouver autour de moi une obscurité, douce et reposante pour mes yeux, mais peut-être plus encore pour mon esprit, à qui elle apparaissait comme une chose sans cause, incompréhensible, comme une chose vraiment obscure. Je me demandais quelle heure il pouvait être; j’entendais le sifflement des trains qui, plus ou moins éloigné, comme le chant d’un oiseau dans une forêt, relevant les distances, me décrivait l’étendue de la campagne déserte où le voyageur se hâte vers la station prochaine; et le petit chemin qu’il suit va être gravé dans son souvenir par l’excitation qu’il doit à des lieux nouveaux, à des actes inaccoutumés, à la causerie récente et aux adieux sous la lampe étrangère qui le suivent encore dans le silence de la nuit, à la douceur prochaine du retour."}' -H 'Content-Type: application/json' 
 ```
 elle va produire le résultat suivant :
 
 ![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2009-36-28.png)
 
 - Finalement pour la partie rate limit : un utilisateur, par son token(jwt) peut consommer N nombre de mots dans une durée T, ces paramètres sont définis dans le fichier "config.js"
 
  
 ![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2010-33-33.png)
 
 et dans mon cas je suis autorisé de consommer 632 mots chaque 30s, le rate limit pour mon token jwt ne peut se déclencher que lorsque je fais une requête sur /api/justify, On limitReached un code 402 est envoyé avec un Payment Required
 
![Settings Window](https://github.com/fou65ad/tictactrip-justify-REST-API/blob/master/screenshots/Screenshot%20from%202018-11-11%2010-41-38.png)

