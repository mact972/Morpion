package com.example.mike.morpion;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.TableRow;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends Activity implements OnClickListener {

    /**CONSTANTS**/

    /*private static final String TAG = MainActivity.class.getCanonicalName();*/

    /**MEMBERS**/

   /* private WebView mWebView;*/

    /*private ProgressBar mLoading;*/
    private Button buttonname;
    private Button a;
    private Button b;
    private Button c;
    private Button d;
    private Button e;
    private Button f;
    private Button g;
    private Button h;
    private Button i;
    private Button rejouer;
    private Button[] bArray;
    boolean part = true;
    // X = true ; O = false;
    int part_count = 0;
    private TableRow partie;
    private TextView vict;
    private TextView def;
    private TextView nul;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.jeu);

        rejouer = (Button)findViewById(R.id.rejouer);

        //on recupère tous les boutons a partir de leurs ids
        a = (Button)findViewById(R.id.a);
        b = (Button)findViewById(R.id.b);
        c = (Button)findViewById(R.id.c);
        d = (Button)findViewById(R.id.d);
        e = (Button)findViewById(R.id.e);
        f = (Button)findViewById(R.id.f);
        g = (Button)findViewById(R.id.g);
        h = (Button)findViewById(R.id.h);
        i = (Button)findViewById(R.id.i);

        //on insère tout les button dans un tableau
        bArray = new Button[]{a,b,c,d,e,f,g,h,i};

        //on asscocie le clic a chaque bouton

        for (Button b : bArray){

                b.setOnClickListener(this);

        }

        rejouer.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                part = true;
                part_count = 0;
                zero(true);
            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }


    @Override
    public void onClick(View v) {

        Button b = (Button)v;
        buttonClicked((Button) v);

    }

    public void buttonClicked(Button b){

            if(part){

                b.setText("X");
            }
            else {

                b.setText("O");
            }

            part_count++;

            /*b.setBackgroundColor(Color.YELLOW);*/
            b.setClickable(false);
            part=!part;

            gagner();

    }

    private void gagner(){

        //on verifie l'horizontale
        boolean gagne = false;
        if(a.getText() == b.getText() && b.getText() == c.getText() && !a.isClickable()){

            gagne = true;
        }
        else if(d.getText() == e.getText() && e.getText() == f.getText() && !d.isClickable()){

            gagne = true;
        }

        else if(g.getText() == h.getText() && h.getText() == i.getText() && !g.isClickable()){

            gagne = true;
        }


        //on verifie la verticale

        else if(a.getText() == d.getText() && d.getText() == g.getText() && !a.isClickable()){

            gagne = true;
        }

        else if(b.getText() == e.getText() && e.getText() == h.getText() && !e.isClickable()){

            gagne = true;
        }

        else if(c.getText() == f.getText() && f.getText() == i.getText() && !i.isClickable()){

            gagne = true;
        }

        //on verifie la diagonale

        else if(a.getText() == e.getText() && e.getText() == i.getText() && !a.isClickable()){

            gagne = true;
        }

        else if(c.getText() == e.getText() && e.getText() == g.getText() && !e.isClickable()){

            gagne = true;
        }

        if(gagne){

            if(!part){

                    toast("X à gagner ;)");
            }
            else{
                    toast("O à gagner ;)");
            }

            //remettre à zero tous les bouttons
            zero(false);

        }else if (part_count == 9 ){

            toast("match null :| ");
        }
    }

    private void zero(boolean choix){

            for (Button b: bArray ){

                    b.setClickable(choix);


            if (choix){

                b.setText("");
            }
            else {

                /*b.setBackgroundColor(Color.);*/
            }
         }
    }

    private void toast(String message){

        Toast.makeText(getApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }



}
