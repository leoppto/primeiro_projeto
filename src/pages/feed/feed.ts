import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public nome_usuario:string="teste nome_usuario";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.soma(10, 5);
  }

  public soma(num1:number, num2:number): void{
    alert(num1 + num2);
  }
}
