import { OptionValueModel } from 'src/app/shared/model/option-value.model';
import { InputOptionType } from './input-option-type';

export interface QuestionInputDataModel {
  question: string;
  inputOptionType: InputOptionType;
  options: OptionValueModel[];
  buttonText: string;
}
