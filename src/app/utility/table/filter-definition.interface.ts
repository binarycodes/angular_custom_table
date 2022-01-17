type NumericInput = 'eq' | 'greaterEqual' | 'lessEqual' | 'greater' | 'less';
type DropdownInput = 'dropdown';
type AutoCompleteInput = 'auto_complete';
type PlainTextInput = 'plain_text';
type DateInput = 'date' | 'date_range';


interface MultipleSupport {
    multiple: boolean
}

interface PartialSupport {
    partial: boolean
}

interface DelimeterSupport {
    delimeter: string | null
}

export type FilterDefinition = {
    type: NumericInput[]
} | {
    type: DropdownInput
    parameters: MultipleSupport
} | {
    type: AutoCompleteInput
    parameters: MultipleSupport & PartialSupport
} | {
    type: PlainTextInput
    parameters: PartialSupport & DelimeterSupport
} | {
    type: DateInput[]
}
