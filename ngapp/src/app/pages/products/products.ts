
import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products: Product[] = [];
  loading = true;
  error = '';
  page = 1;
  limit = 12;
  total = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  get totalPages(): number {
    return Math.ceil(this.total / this.limit);
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    this.loading = true;
    this.error = '';
    this.cdr.detectChanges();

    const skip = (this.page - 1) * this.limit;
    const url =
  `${environment.apiUrl}/products?limit=${this.limit}&skip=${skip}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }

      const data: ProductsResponse = await response.json();

      if (!Array.isArray(data.products)) {
        throw new Error('Les données reçues sont invalides.');
      }

      this.products = data.products;
      this.total = data.total;

      console.log('Page chargée :', this.page);
      console.log('Nombre de produits :', this.products.length);
    } catch (error) {
      console.error('Erreur pendant le chargement :', error);

      this.error =
        'Impossible de charger les produits. Réessaie dans quelques instants.';
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  
previousPage(): void {
  if (this.page > 1) {
    this.page--;
    void this.loadProducts();
    this.cdr.detectChanges();
  }
}

nextPage(): void {
  if (this.page < this.totalPages) {
    this.page++;
    void this.loadProducts();
    this.cdr.detectChanges();
  }
}
}

