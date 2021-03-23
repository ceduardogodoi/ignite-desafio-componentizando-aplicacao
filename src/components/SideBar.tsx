import { useEffect, useState } from 'react';

import { Button } from './Button';

import { GenreResponseProps } from '../models/GenreResponseProps';

import { api } from '../services/api';

type SideBarProps = {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleGenreClick(id: number): void;
};

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleGenreClick(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
