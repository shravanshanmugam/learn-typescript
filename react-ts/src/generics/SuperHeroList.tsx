import {SuperHero} from "./superheroes";

type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}
export const SuperHeroList = <T extends SuperHero>(props: ListProps<T>) => {
    const {items, onClick } = props;
    return (
        <div className="list">
            <h2>List of items</h2>
            {items.map(item => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.id}. {item.name}
                    </div>
                )
            })}
        </div>
    )
}