var a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '' ;
var partie = true;
var victory = 0, nul = 0, loose = 0;

function rond(cas)
    {
    $("#"+cas).css("background","white url(rond.png) no-repeat center");
    eval(cas+" = 'rouge'");
    }

function croix(lettre)
    {
    $('#'+lettre).css("background","white url(croix.png) no-repeat center");
    eval(lettre+" ='bleu'");
    }

function victoire()
    {

    $('#vic').text('Victoire');
    window.victory++;
    $('#sucess').text(window.victory);
    window.partie = false;

    }

function nuls()
    {

    $('#vic').text('Nul');
    window.nul++;
    $('#nul').text(window.nul);
    window.partie = false;

    }

function defaite()
    {
    $('#vic').text('Defaite');
    window.loose++;
    $('#loose').text(window.loose);
    window.partie = false;
    }

function nb_aleatoire(nb)
    {
    var nombre= Math.floor(Math.random() * nb);
    return nombre;
    }

$('td').click(function()
    {
        if(partie) // on vérifie que la partie est en cours
        {
            var id = $(this).attr('id');

            var pou = "id";


            var pere = eval(pou);
            var peret = eval(pere); // on récupère le contenue de la variable

            // la case est cochée
            if(peret == "rouge" || peret == "bleu")
            {
                if(a != '' && a == b && a == c || d != '' && d == e && d == f || g != '' && g == h && g == i || a != '' && a == d && a == g || b != '' && b == e && b == h || c != '' && c == f && c == i || a != '' && a == e && a == i || c != '' && c == e && c == g )
                    {

                        victoire();

                    }
                else if(a != '' && b != '' && c != '' && d != '' && e != '' && f != '' && g != '' && h != '' && i != '')
                    {

                        nuls();

                    }
                if(e == '')
                     {
                        croix("e");
                     }
                else if(a == 'bleu' && b == 'bleu' && c == '')
                     {
                        croix("c");
                        defaite();
                     }
                else if(a == 'bleu' && b == '' && c == 'bleu')
                     {
                        croix("b");
                        defaite();
                     }
                else if(a == '' && b == 'bleu' && c == 'bleu')
                     {
                        croix("a");
                        defaite();
                     }
                        // d/e/f
                else if(d == 'bleu' && e == '' && f == 'bleu')
                     {
                        croix("e");
                        defaite();
                     }
                else if(d == 'bleu' && e == 'bleu' && f == '')
                     {
                        croix("f");
                        defaite();
                     }
                else if(d == '' && e == 'bleu' && f == 'bleu')
                     {
                        croix("d");
                        defaite();
                     }
                        // g/h/i
                else if(g == 'bleu' && h == 'bleu' && i == '')
                     {
                        croix("i");
                        defaite();
                     }
                else if(g == 'bleu' && h == '' && i == 'bleu')
                     {
                        croix("h");
                        defaite();
                     }
                else if(g == '' && h == 'bleu' && i == 'bleu')
                     {
                        croix("g");
                        defaite();
                     }
                        // a/d/g
                else if(a == 'bleu' && d == 'bleu' && g == '')
                     {
                        croix("g");
                        defaite();
                     }
                else if(a == 'bleu' && d == '' && g == 'bleu')
                     {
                        croix("d");
                        defaite();
                     }
                else if(a == '' && d == 'bleu' && g == 'bleu')
                     {
                        croix("d");
                        defaite();
                     }
                        // b/e/h
                else if(b == 'bleu' && e == 'bleu' && h == '' )
                     {
                        croix("h");
                        defaite();
                     }
                        else if(b == 'bleu' && e == '' && h == 'bleu' )
                     {
                        croix("e");
                        defaite();
                     }
                else if(b == '' && e == 'bleu' && h == 'bleu')
                     {
                        croix("b");
                        defaite();
                     }
                        // c/f/i
                else if(c == 'bleu' && f == 'bleu' && i == '')
                     {
                        croix("i");
                        defaite();
                     }
                else if(c == 'bleu' && f == '' && i == 'bleu')
                     {
                        croix("f");
                        defaite();
                     }
                else if(c == '' && f == 'bleu' && i == 'bleu')
                     {
                        croix("c");
                        defaite();
                     }
                        // a/e/i
                else if(a == 'bleu' && e == 'bleu' && i == '')
                     {
                        croix("i");
                        defaite();
                     }
                else if(a == 'bleu' && e == '' && i == 'bleu')
                     {
                        croix("e");
                        defaite();
                     }
                else if(a == '' && e == 'bleu' && i == 'bleu')
                     {
                        croix("a");
                        defaite();
                     }
                        // c/e/g
                else if(c == 'bleu' && e == 'bleu' && g == '')
                     {
                        croix("g");
                        defaite();
                     }
                else if(c == 'bleu' && e == '' && g == 'bleu')
                     {
                        croix("e");
                        defaite();
                     }
                else if(c == '' && e == 'bleu' && g == 'bleu')
                     {
                        croix("c");
                        defaite();
                     }

                else if(a == 'rouge' && b == 'rouge' && c == '')
                     {
                        croix("c");
                     }
                else if(a == 'rouge' && b == '' && c == 'rouge')
                     {
                        croix("b");
                     }
                else if(a == '' && b == 'rouge' && c == 'rouge')
                     {
                        croix("a");
                     }
                        // d/e/f
                else if(d == 'rouge' && e == '' && f == 'rouge')
                     {
                        croix("e");
                     }
                else if(d == 'rouge' && e == 'rouge' && f == '')
                     {
                        croix("f");
                     }
                else if(d == '' && e == 'rouge' && f == 'rouge')
                     {
                        croix("d");
                     }
                        // g/h/i
                else if(g == 'rouge' && h == 'rouge' && i == '')
                     {
                        croix("i");
                     }
                else if(g == 'rouge' && h == '' && i == 'rouge')
                     {
                        croix("h");
                     }
                else if(g == '' && h == 'rouge' && i == 'rouge')
                     {
                        croix("g");
                     }
                        // a/d/g
                else if(a == 'rouge' && d == 'rouge' && g == '')
                     {
                        croix("g");
                     }
                else if(a == 'rouge' && d == '' && g == 'rouge')
                     {
                        croix("d");
                     }
                else if(a == '' && d == 'rouge' && g == 'rouge')
                     {
                        croix("a");
                     }
                        // b/e/h
                else if(b == 'rouge' && e == 'rouge' && h == '' )
                     {
                        croix("h");
                     }
                else if(b == 'rouge' && e == '' && h == 'rouge' )
                     {
                        croix("e");
                     }
                else if(b == '' && e == 'rouge' && h == 'rouge')
                     {
                        croix("b");
                     }
                        // c/f/i
                else if(c == 'rouge' && f == 'rouge' && i == '')
                     {
                        croix("i");
                     }
                else if(c == 'rouge' && f == '' && i == 'rouge')
                     {
                        croix("f");
                     }
                else if(c == '' && f == 'rouge' && i == 'rouge')
                     {
                        croix("c");
                     }
                        // a/e/i
                else if(a == 'rouge' && e == 'rouge' && i == '')
                     {
                        croix("i");
                     }
                else if(a == 'rouge' && e == '' && i == 'rouge')
                     {
                        croix("e");
                     }
                else if(a == '' && e == 'rouge' && i == 'rouge')
                     {
                        croix("a");
                     }
                        // c/e/g
                else if(c == 'rouge' && e == 'rouge' && g == '')
                     {
                        croix("g");
                     }
                else if(c == 'rouge' && e == '' && g == 'rouge')
                     {
                        croix("e");
                     }
                else if(c == '' && e == 'rouge' && g == 'rouge')
                     {
                        croix("c");
                     }

                // coup préventif en coin
                else if(a == '' || c == '' || g == '' || i == '')
                     {
                        var nou = ['a','c','g','i'];

                        var ii = true;

                        while(ii)
                        {

                            var bze = nou[nb_aleatoire(4)];
                            var bouz = eval(bze);

                            if(bouz == '')
                            {

                                croix(bze);


                            if(a != '' && a == b && a == c || d != ''  && d == e && d == f || g != '' && g == h && g == i || a != '' && a == d && a == g || b != '' && b == e && b == h || c != '' && c == f && c == i || a != '' && a == e && a == i || c != '' && c == e && c == g )
                            {
                                defaite();
                            }

                            ii = false;
                            }
                            else
                            {

                            }
                        }

                     }


                     // cocher autre case
                else if(e == 'bleu' && c == 'rouge' && g == 'rouge' || e == 'bleu' && a == 'rouge' && i == 'rouge')
                     {

                             var nou = ['b','d','f','h'];

                             var ii = true;

                             while(ii)
                             {
                                 var bze = nou[nb_aleatoire(4)];
                                 var bouz = eval(bze);

                                 if(bouz == '')
                                 {


                                    croix(bze);


                                 if(a != '' && a == b && a == c || d != ''  && d == e && d == f || g != '' && g == h && g == i || a != '' && a == d && a == g || b != '' && b == e && b == h || c != '' && c == f && c == i || a != '' && a == e && a == i || c != '' && c == e && c == g )
                                 {
                                    defaite();
                                 }
                                    ii = false;
                                 }
                             }


                     }

                else if(a == '' || b == '' || c == '' || d == '' || e == '' || f == '' || g == '' || h == '' || i == '' )
                     {
                        var nou = ['a','b','c','d','f','g','h','i'];

                        var ii = true;

                            while(ii)
                            {

                                var bze = nou[nb_aleatoire(8)];
                                var bouz = eval(bze);

                                if(bouz == '')
                                {

                                    croix(bze);

                                if(a != '' && a == b && a == c || d != ''  && d == e && d == f || g != '' && g == h && g == i || a != '' && a == d && a == g || b != '' && b == e && b == h || c != '' && c == f && c == i || a != '' && a == e && a == i || c != '' && c == e && c == g )
                                {
                                    defaite();
                                }

                                ii = false;
                                }
                                else
                                {

                                }

                            }



                     }
            }

            else //la case n'est pas coché.
            {
                rond(id);

                var ble = eval(pou)+" = 'rouge'";

                eval(ble); // on coche la case

            }

        }
     );

     $('#retour').click(function()
    {
         a='';
         b='';
         c='';
         d='';
         e='';
         f='';
         g='';
         h='';
         i='';

         $('td').css('background','white');
         $('#vic').text('Résultat');

         partie = true;


    });


