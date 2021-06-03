import { NgModule } from '@angular/core';
import { BaseTemplateModule } from './base-template/base-template.module';

@NgModule({
  exports: [BaseTemplateModule],
  imports: [BaseTemplateModule]
})
export class CoreModule {}
