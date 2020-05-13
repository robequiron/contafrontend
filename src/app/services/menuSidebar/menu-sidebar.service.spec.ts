import { TestBed } from '@angular/core/testing';

import { MenuSidebarService } from './menu-sidebar.service';

describe('MenuSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuSidebarService = TestBed.get(MenuSidebarService);
    expect(service).toBeTruthy();
  });
});
