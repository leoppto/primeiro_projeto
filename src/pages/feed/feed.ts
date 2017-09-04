import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Leonardo P",
    data:"November 5, 1955",
    descricao:"Estou criando um app incrivel...",
    qntd_likes:12,
    qntd_comments:4,
    time_comment:"11h ago"
  }

  public lista_filmes = new Array<any>();

  public nome_usuario:string="teste nome_usuario";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.soma(10, 5);
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const retorno = JSON.parse(response._body);
        this.lista_filmes = retorno.results;
        
        console.log(retorno);
      },
      error=>{console.log(error);}
    )
  }

  public soma(num1:number, num2:number): void{
    alert(num1 + num2);
  }
}
