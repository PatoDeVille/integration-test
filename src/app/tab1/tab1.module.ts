import { IonicModule } from '@ionic/angular';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TranslationsUveI18nModule } from '@uve/translations';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SharedFeatureComponentsModule } from '@uve/shared-components';
import { SharedDomainModule } from '@uve/shared-domain';
import { ApiClientModule, ApiClientRootModule } from '@uve/api-angular-client';
import { Api } from '@uve/api-client-lib';
import { ModalComponent } from './modal/modal.component';
import { OverlayModule} from '@angular/cdk/overlay';

export const CLIENT_API = new InjectionToken<string>('');

export class ServiceConfig {
  production: boolean;
  baseUrl: string;
  authToken: string;
  fallbackUrl: string;
  organizationId: string;
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedFeatureComponentsModule,
    SharedDomainModule,
    OverlayModule,
    ApiClientRootModule.forRoot({} as any),
    ApiClientModule,
    TranslationsUveI18nModule.forRoot({ environment: {production:false} }),
  ],
  declarations: [Tab1Page, ModalComponent],
  providers:[]
})
export class Tab1PageModule {
  static forRoot(config: any): ModuleWithProviders<Tab1PageModule> {
    return {
      ngModule: Tab1PageModule,
      providers: [
        { provide: ServiceConfig, useValue: config },
        { provide: CLIENT_API, useFactory: () => new Api(config) },
      ],
    };
  }
}
