/** Created by Erick on 29th October, 2021 */
export interface TextInputProps {
  type: "text" | "password",
  placeholder?: string | "Enter placeholder",
  icon?: string,
  required?: boolean,
  name: string,
  onChange?(value: string): void
}
