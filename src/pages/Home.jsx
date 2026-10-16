import { Consultants } from '../components/Consultants';
import { Directory } from '../components/Directory';
import { Hero } from '../components/Hero';
import { News } from '../components/News';
import { Promo } from '../components/Promo';
import { Testimonial } from '../components/Testimonial';
import { departments, moreDepartments, moreServices, services } from '../data';

export function Home() {
  return (
    <main>
      <Hero />
      <Promo />
      <Directory
        first
        id="departments"
        title="Departments"
        lede="In each of our department pages, you'll discover the services available, its consultants, a step-by-step guide and contact details."
        items={departments}
        more={moreDepartments}
        prefix="dept"
        action="View all departments"
      />
      <Directory
        id="services"
        title="Services"
        lede="Explore our services to find the care you're looking for, the consultants involved, a step-by-step guide and contact details."
        items={services}
        more={moreServices}
        prefix="svc"
        action="View all services"
        searchable
        placeholder="Search Services"
      />
      <Testimonial />
      <Consultants />
      <News />
    </main>
  );
}
