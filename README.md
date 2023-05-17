#  PocketBase-useFetch Hook

Le hook `usePBFetch` est un hook personnalisé pour récupérer des données à partir de PocketBase. Il facilite les appels API et la gestion des données dans votre application React.
**Il est important d'avoir des bases en TypeScript afin d'utiliser ce hook !**

## Exemple d'utilisation

Pour utiliser le hook `usePBFetch`, vous devez suivre les étapes suivantes :

1. Importez le hook dans votre composant :

   ```tsx
   import { usePBFetch } from './hook/usePBFetch';
   ```
   
2. Récupérer un seul enregistrement
   
   ```tsx
    const { data, loading, error } = usePBFetch<ContactFormRecord>({
      collectionName: COLLECTIONS.CONTACT_FORM,
      method: FETCH_METHOD.GET_ONE,
      fetchOnLoad: true,
      params: [id],
    });
    ```
    
    Il est important d'utiiser des constantes génériques pour vos noms de méthodes et collections afin d'éviter tout erreur et gagner en lisibilité !
    
3. Supprimer un enregistrement :
    
    ```tsx
    const {
      data: deleteData,
      loading: deleteLoading,
      error: deleteError,
      fetchData: removeData,
    } = usePBFetch<ContactFormRecord>({
      collectionName: COLLECTIONS.CONTACT_FORM,
      method: FETCH_METHOD.DELETE,
      fetchOnLoad: false,
      params: [id],
     });
     
     // Utiliser removeData pour supprimer l'enregistrement
    ```
    
    Note : Vous pouvez utiliser plusieurs paramètres si votre API demande une id et un email par exemple, vous pouvez faire 
    `params: [id, mail]` ATTENTION ! L'ordre est important.
    

4. Récupérer une liste complète

```tsx
    const { data, loading, error } = usePBFetch<ContactFormRecord[]>({
      collectionName: COLLECTIONS.CONTACT_FORM,
      method: FETCH_METHOD.GET_FULL_LIST,
      fetchOnLoad: true,
    });
```

5. Exemple de rendu HTML

```ts
   <p className='text-xl my-5'>
    Message (id: {data.id}) <br></br>
    Reçu le {new Date(data.created).toLocaleString().replace(' ', ' à ')}
   </p>
```
