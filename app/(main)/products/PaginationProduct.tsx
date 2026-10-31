import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

type Props = {
  page: number;
  totalPages: number;
};

export function PaginationProduct({ page, totalPages }: Props) {

  
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <Pagination>
      <PaginationContent>
        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink href={`/products?page=${p}`} isActive={p === page}>
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
}
