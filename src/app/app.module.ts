import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CustomerServiceComponent } from './customer-info-form/customer-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LizziComponentComponent } from './lizzi-component/lizzi-component.component';
import { MatSelectModule } from '@angular/material/select';
import { JdhAdditionComponent } from './jdh-addition/jdh-addition.component';
import { BrissSlackNTellComponent } from './briss-slack-n-tell/briss-slack-n-tell.component';
import { MatChipsModule } from '@angular/material/chips';
import { PizzaExtrasComponent } from './pizza-extras/pizza-extras.component';
import { MatSliderModule } from '@angular/material/slider';
import { TipAmountComponent } from './tip-amount/tip-amount.component';
import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { AlAdditionComponent } from './al-addition/al-addition.component';
import { MatDialogModule } from '@angular/material/dialog';
import { WisconsinSalesTaxComponent } from './wisconsin-sales-tax/wisconsin-sales-tax.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { TdjRollDiceComponent } from './tdj-roll-dice/tdj-roll-dice.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    CustomerServiceComponent,
    TjsMultiplicationComponent,
    LizziComponentComponent,
    JdhAdditionComponent,
    BrissSlackNTellComponent,
    TjsMultiplicationComponent,
    AlAdditionComponent,
    TjsMultiplicationComponent,
    TjsAdditionComponent,
    TjsMultiplicationComponent,
    WisconsinSalesTaxComponent,
    TdjRollDiceComponent,
    TipAmountComponent,
    PizzaExtrasComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatCheckboxModule
    , MatButtonModule
    , MatInputModule
    , MatSelectModule
    , MatChipsModule
    , MatSliderModule
    , MatDialogModule
    , MatFormFieldModule
    , MatSelectModule
    , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
