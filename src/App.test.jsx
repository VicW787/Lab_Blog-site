import { render, screen } from '@testing-library/react';
import App from './App';
import { blogName, aboutText, posts } from './blog';

test('renders the blog name as an h1', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: blogName })
  ).toBeInTheDocument();
});

test('renders the about image with alt "blog logo" and the bio text', () => {
  render(<App />);
  expect(screen.getByAltText('blog logo')).toBeInTheDocument();
  expect(screen.getByText(aboutText)).toBeInTheDocument();
});

test('renders one article per post', () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll('article').length).toBe(posts.length);
});

test("renders each post's title, date, and preview", () => {
  render(<App />);
  posts.forEach((post) => {
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.date)).toBeInTheDocument();
    expect(screen.getByText(post.preview)).toBeInTheDocument();
  });
});