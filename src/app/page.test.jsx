import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Page', () => {
  beforeEach(() => {
    render(<Page />);
  });

  describe('Header section', () => {
    it('renders the main heading with correct text (case insensitive)', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/hello next\.js world!/i);
    });
  });

  describe('Page structure', () => {
    it('should be in a main landmark region', () => {
      const mainElement = screen.getByRole('main');
      expect(mainElement).toBeInTheDocument();
    });

    it('should maintain visual haierarchy and contain expected text', () => {
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThanOrEqual(1);
      for (const heading of headings) {
        expect(heading.textContent).toMatch(/^[A-Za-z\s.!]+$/);
      }
    });
  });

  describe('Accessibility', () => {
    it('should have appropriate ARIA landmarks', () => {
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
      expect(main).toHaveAttribute('aria-label');
    });

    it('should have descriptive ARIA labels', () => {
      const main = screen.getByRole('main');
      expect(main).toHaveAttribute(
        'aria-label',
        expect.stringMatching(/^next\.js.*page$/i),
      );
    });

    it('should use semantic HTML elements', () => {
      const main = screen.getByRole('main');
      expect(main.tagName.toLowerCase()).toBe('main');
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });
  });
});
