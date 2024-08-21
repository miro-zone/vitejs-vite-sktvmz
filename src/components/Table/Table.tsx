import {
  useContext,
  createContext,
  PropsWithChildren,
  // Children,
  useRef,
  useEffect,
HtmlHTMLAttributes,
} from 'react';

/**
 * Helper functions.
 */
// function getChildComponent(children: any, name: string): any[] {
//   const targetComponent = Children.toArray(children).filter(
//     (c: any) => c?.type?.name === name
//   );
//   const restComponent = Children.toArray(children).filter(
//     (c: any) => c?.type?.name !== name
//   );
//   restComponent.forEach((c: any) => {
//     if (c?.props?.children)
//       targetComponent.push(...getChildComponent(c.props.children, name));
//   });
//   return targetComponent;
// }

/**
 * Context.
 */
const tableContext = createContext(false);

const useTable = () => useContext(tableContext);

/**
 * Table.
 */

export function Table({ children }: PropsWithChildren) {


  const tableRef = useRef<HTMLTableElement>(null);
  useEffect(()=>{
    if(tableRef.current){
      console.log('table', tableRef.current);
    }
  }, [tableRef.current])

  // console.log(getChildComponent(children, 'TableHead'));
  return (
    <tableContext.Provider value={false}>
      <table ref={tableRef}>{children}</table>
    </tableContext.Provider>
  );
}

type GeneralProps<T> = PropsWithChildren & HtmlHTMLAttributes<T>;

/**
 * Table head.
 */
export function TableHead({
  children,
  ...props
}: GeneralProps<HTMLTableSectionElement>) {
  return <thead {...props}>{children}</thead>;
}

/**
 * Table body.
 */
export function TableBody({
  children,
  ...props
}: GeneralProps<HTMLTableSectionElement>) {
  return <tbody {...props}>{children}</tbody>;
}

/**
 * Table row.
 */
export function TableRaw({
  children,
  ...props
}: GeneralProps<HTMLTableRowElement>) {
  return <tr {...props}>{children}</tr>;
}

/**
 * Table head cell.
 */
export function TableHeadCell({
  children,
  ...props
}: GeneralProps<HTMLTableCellElement>) {
  return <td {...props}>{children}</td>;
}

/**
 * Table data cell.
 */
export function TableDataCell({
  children,
  ...props
}: GeneralProps<HTMLTableCellElement>) {
  return <td {...props}>{children}</td>;
}

/** */
