/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webApi/LICENSE
 */

import { JsonConverter, JsonCustomConvert } from 'json2typescript';

@JsonConverter
export class ISODateConverter implements JsonCustomConvert<Date> {
  public serialize(date: Date): string {
    return date.toISOString();
  }
  public deserialize(isoString: any): Date {
    const millis = Date.parse(isoString);
    return new Date(millis);
  }
}
